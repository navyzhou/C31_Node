/**
 * Created by Administrator on 2016/10/17.
 */
var fs=require("fs");

//检测文件或目录是否存在
fs.exists("./../task02",function(exist){
    console.info(exist);
});

//获取文件或目录的绝对路径
fs.realpath("./../task04/yc",function(err,path){
    if(err){
        console.info(err);
    }else{
        console.info(path);
    }
});

//移动文件或目录
//fs.rename(oldPath,newPath,callback);
fs.rename("./yc.txt","./yc/yc.txt",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("文件移动成功...");
    }
});

//截断文件
fs.truncate("./yc/yc.txt",12,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("文件截断成功...");
    }
});

//删除目录
fs.rmdir("./navy",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("删除目录成功...");
    }
});

//删除文件
fs.unlink("./f.txt",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("删除文件成功...");
    }
});

//删除指定的目录