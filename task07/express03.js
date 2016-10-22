var express=require("express");
var fs=require("fs");
var app=express();//创建应用程序

//使用express中的静态中间件，主要用来返回指定路径下的静态资源
//app.use(express.static(__dirname));
app.use(express.static("wzgs")); //指定将请求的资源定位到wzgs下

app.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});


//npm install body-parser
//npm install multer
//npm install express-session