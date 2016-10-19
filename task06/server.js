var http=require("http");
var fs=require("fs");
var mysql=require("mysql");
var querystring=require("querystring");

var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"aaaa",
    database:"yc"
});

var server=http.createServer().listen(80,function(err){
   if(err){
       console.info(err);
   } else{
       console.info("服务器启动成功....");
   }
});

server.on("request",function(req,resp){
   if(req.url=="/index.html" || req.url=="/jquery-1.11.3.js"){
       var data=fs.readFileSync("."+req.url);
       resp.write(data);
       resp.end();
   }else if(req.url=="/adminRegister"){
        req.on("data",function(data){
            var obj=querystring.parse(data.toString());
            //将这个对象存到数据库
            connection.connect(function(err){ //连接数据库
                if(err){
                    console.info(err);
                }else{
                    //connection.query("insert into adminInfo values(0,?,?,?,?,'')",[obj.aname,obj.pwd,obj.age,obj.addr],function(err,result){
                    connection.query("insert into adminInfo set ?",obj,function(err,result){
                        connection.end();
                        resp.writeHead(200,"OK",{"Content-Type":"text/html;charset=utf-8"});
                        if(err){
                           resp.write("数据库操作失败...");
                        }else{
                           resp.write("添加成功...");
                        }
                        resp.end();
                    });
                }
            });
        });
   }else if(req.url=="/getAllAdminInfo"){ //查询所有
       connection.connect(function(err){ //连接数据库
           if(err){
               console.info(err);
           }else{
               connection.query("select * from adminInfo",function(err,result){
                   connection.end();
                   resp.writeHead(200,"OK",{"Content-Type":"application/json;charset=utf-8"});
                   if(err){
                       resp.write("数据库操作失败...");
                   }else{
                       resp.write(JSON.stringify(result));
                   }
                   resp.end();
               });
           }
       });
   }else{
       resp.end();
   }
});
