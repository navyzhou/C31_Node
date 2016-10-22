var express=require("express");
var bodyParser=require('body-parser');
var multer=require('multer');
var fs=require("fs");
var upload = multer({dest:'uploads/'}); //设置上传的路径

var app=express(); //创建一个应用程序

//自动将表单中的数据转为对象
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/uploadPhoto",upload.array("photo"),function(req,res){
    if(req.files==undefined){
        console.info("用户没有上传图片...");
    }else{
        //console.info(req.file);
        //写文件要用绝对路径
        for(var i=0;i<req.files.length;i++){
            var fl = req.files[i];
            console.info(fl);
            //文件的真实路径
            var path = __dirname + "/" + fl.destination + new Date().getTime() + "_" + fl.originalname;
            fs.renameSync(fl.path, path);
        }
    }
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
