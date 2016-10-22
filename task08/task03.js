var express=require("express");
var bodyParser = require('body-parser');
var app=express(); //创建一个应用程序

//自动将表单中的数据转为对象
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/addInfo",function(req,res){
    var str="";
    for(var key in req.body){
        str+=key+"="+req.body[key]+"\t";
    }
    res.send(str);
});

app.use(express.static(__dirname));

app.listen(80,function(err){
    if(err) {
        console.info(err);
    }else{
        console.info("应用程序启动成功....");
    }
});
