//var app=require("express")();

var express=require("express");
var app=express();//创建应用程序

app.get("/",function(req,resp){//处理get请求
    //resp.header("Content-Type","text/html"); //用来发送头部协议
    resp.send("你好！");
});

app.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});