var express=require("express");
var fs=require("fs"); //文件操作模块
var mysql=require("mysql"); //数据库模块
var session=require("express-session"); //session模块
var bodyParser=require("body-parser"); //处理请求信息的模块
var nodemailer=require("nodemailer"); //邮件发送的
var multer=require("multer"); //文件上传的
var log4js=require("log4js"); //日志的
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://1293580602@qq.com:dihpepdwtahlgefh@smtp.qq.com');
var app=express(); //创建一个应用程序
//启用bodyParser中间件
app.use(bodyParser.urlencoded({extended:false}));

//配置和使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//图片上传的中间件配置
var upload=multer({dest:"./page/file"}); //指定文件上传的目录

//日志的配置
log4js.configure({
    appenders: [
        { type: 'console' },  //控制台输出的配置
        { type: 'file', filename: 'logs/blog.log', category: 'normal' } //文件输出的配置
    ]
});
var logger = log4js.getLogger("normal");
logger.setLevel("debug"); //设置日志的级别为调试级别

app.use(log4js.connectLogger(logger,{level:"auto",format:":method :url"}));

//数据连接池的配置
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"blog",
    user:"root",
    password:"aaaa"
});

app.all("/back/*",function(req,res,next){ //权限过滤
    if(req.session.currentLoginUser==undefined){
        res.send("<script>alert('请先登录...');location.href='/index.html';</script>");
    }else{
        next(); //将请求往下传递
    }
});

/**
 * 发送校验码
 */
app.post("/sendCode",function(req,res){
    var str="";
    while(str.length<6){
        str+=Math.floor(Math.random()*10);
    }
    console.info(str);
    transporter.sendMail({
        from: '1293580602@qq.com',
        to:req.body.email,
        subject: 'Blog注册校验码',
        text:str,
    },function(error, info){
        if(error){
            res.send("0");
        }else{
            //将当前的检验码存到session
            req.session.sendCode=str;
            res.send("1");
        }
    });
});

/**
 * 处理用户注册的
 */
app.post("/userRegister",upload.single("photo"),function(req,res){
    var obj=req.body;
    if(obj.uname=="" || obj.pwd=="" || obj.email==""){
        res.send("0");
    }else if( obj.code!=req.session.sendCode ){ //判断校验码是否正确
        res.send("4"); //说明验证码错误
    }else{
        console.info(req.body);
        if(req.file!=undefined){
            var file=req.file;
            var fileName=new Date().getTime()+"_"+file.originalname;
            fs.renameSync(file.path,__dirname+"/page/file/"+fileName);

            //将这些数据存到数据库
            pool.getConnection(function(err,con){
               if(err){
                   logger.error(err.message.toString());
                   res.send("1"); //说明数据库连接失败...
               }else{
                   con.query("insert into userInfo values(0,?,?,?,?,1)",[obj.uname,obj.pwd,obj.email,"file/"+fileName],function(err,result){
                       if(err){
                           logger.error(err.message.toString());
                           res.send("2"); //说明添加有误...
                       }else{
                           res.send("3");
                       }
                   })
               }
            });
        }
    }
});

//处理用户登录
app.post("/userLogin",function(req,res){
    var obj=req.body;
   if(obj.uname=="" || obj.pwd==""){
       res.send('{"error":"0"}');
   }else{
       pool.getConnection(function(err,con){
          if(err){
              logger.error(err.message.toString());
              res.send('{"error":"1"}');
          }else{
              con.query("select * from userInfo where (uname=? or email=?) and pwd=?",[obj.uname,obj.uname,obj.pwd],function(err,result){
                  if(err) {
                      logger.error(err.message.toString());
                      res.send('{"error":"2"}');
                  }else{
                      if(result.length==0){//说明没有查到数据
                          res.send('{"error":"3"}');
                      }else{
                          //将当前登录用户信息存到session中
                          req.session.currentLoginUser=result[0];
                          res.send(result[0]);
                      }
                  }
              });
          }
       });
   }
});

//判断用户是否已经等
app.get("/checkUserLogin",function(req,res){
   if(req.session.currentLoginUser==undefined){ //说明用户没有登录
        res.send('{"error":"1"}');
   }else{
       res.send(req.session.currentLoginUser);
   }
});

//获取所有的文章类型信息
app.get("/getAllTypeInfo",function(req,res){
    pool.getConnection(function(err,con){
        if(err){
            logger.error(err.message.toString());
            res.send('{"error":"1"}');
        }else{
            con.query("select * from typeInfo where status=1",function(err,result){
                if(err){
                    logger.error(err.message.toString());
                    res.send('{"error":"2"}');
                }else{
                    res.send(result);
                }
            });
        }
    }) ;
});

//发表博客文章
app.post("/addBlog",upload.array("pic"),function(req,res){
    var obj=req.body;
    if(obj.title=="" || obj.content==""){
        res.send("0"); //信息不完整
    }else if(req.session.currentLoginUser==undefined){
        res.send("1"); //没有登录
    }else{
        var picstr = "";
        if(req.files!=undefined) {
            var file;
            var fileName;
            for (var i in req.files) {
                file = req.files[i];
                fileName = new Date().getTime() + "_" + file.originalname; //生成一个新的文件名
                fs.renameSync(file.path, __dirname + "/page/file/" + fileName);
                if (picstr != "") {
                    picstr += ",";
                }
                picstr += "file/" + fileName;
            }
        }
        //将这些数据存到数据库
        pool.getConnection(function(err,con){
            if(err){
                logger.error(err.message.toString());
                res.send("2"); //说明数据库连接失败...
            }else{
                con.query("insert into article values(0,?,?,?,?,now(),?,0)",[obj.tid,req.session.currentLoginUser.usid,obj.title,obj.content,picstr],function(err,result){
                    if(err){
                        logger.error(err.message.toString());
                        res.send("2"); //说明添加有误...
                    }else{
                        res.send("3");
                    }
                });
            }
        });
    }
});

//查询所有文章信息
app.get("/getAllArticle",function(req,res){
    pool.getConnection(function(err,con){
        if(err){
            logger.error(err.message.toString());
            res.send('{"error":"1"}'); //说明数据库连接失败...
        }else {
            con.query("select * from article a,userInfo u,typeInfo t where a.usid=u.usid and a.tid=t.tid",function(err,result){
                if(err){
                    logger.error(err.message.toString());
                    res.send('{"error":"2"}')
                }else{
                    res.send(result);
                }
            });
        }
    });
});

//用户注销
app.get("/userLoginOut",function(req,res){
    req.session.currentLoginUser==undefined;
    res.send("0");
});

//启用静态模块
app.use(express.static("page"));

app.listen(80,function(err){
   if(err){
       logger.error(err.message.toString());
       console.info(err);
   } else{
       logger.info("应用程序启动成功...");
       console.info("应用程序启动成功...");
   }
});