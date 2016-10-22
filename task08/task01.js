/**
 * Created by Administrator on 2016/10/22.
 */
var express=require("express");
var app=express(); //创建一个应用程序

app.get("/index.html/:id/:name",function(req,res){
    var str="";
    for(var key in req.params){
        if(str!=""){
            str+="<br />";
        }
        str+=key+":"+req.params[key];
    }
    res.send(str);
});

app.listen(80,function(err){
    if(err) {
        console.info(err);
    }else{
        console.info("应用程序启动成功....");
    }
});
