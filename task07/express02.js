var express=require("express");
var fs=require("fs");
var app=express();//创建应用程序

app.get("/*",function(req,res){
    fs.stat("."+req.url,function(err,stats){
        if(stats.isFile()){
            fs.exists("."+req.url,function(exists){
                if(exists){
                    res.sendFile(__dirname+req.url);
                }else{
                    res.send("出错啦..");
                }
            })
        }else{
            res.send("出错啦..");
        }
    });
});

app.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});