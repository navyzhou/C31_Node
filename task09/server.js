var express=require("express");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var app=express();

//启用cookie
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

//启用session
app.use(session({
    secret: 'keyboard cat', //session id
    resave: false, //每次请求是否重新设置session cookie的过期时间
    saveUninitialized: true, //设置session cookie
    cookie: { secure: false }, //secure 应用在https协议上
    cookie:{ maxAge:1000*60}
}));

/**
 * 用户登录请求
 */
//var uname;

app.post("/userLogin",function(req,res){
    if(req.body.uname!=""){
        //console.info(uname);
        //uname=req.body.uname;
        req.session.uname=req.body.uname; //将当前登录用户存入到sessio中
        res.send("1");
    }else{
        res.send("0");
    }
});

/**
 * 获取当前登录的用户名
 */
app.get("/getCurrentUserName",function(req,res){
    res.send(req.session.uname);
});

app.use(express.static(__dirname));

app.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});