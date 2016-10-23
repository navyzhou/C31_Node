var express=require("express");
var cookieparser=require("cookie-parser");
var app=express();

//启用cookie
app.use(cookieparser());

app.get("/getCookie",function(req,res){
    var date=new Date();
    date.setDate( date.getDate()+7 ); //7天后过期
    res.setHeader("Set-cookie","aname=navy;expires="+date.toUTCString());//服务器往客户端写cookie数据
    var str="";
    console.info(req.cookies);
    for(var key in req.cookies){
        str+=key+":"+req.cookies[key]+"\t";
    }
    res.send(str);
});

app.use(express.static(__dirname));

app.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功...");
    }
});