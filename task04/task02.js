/**
 * Created by Administrator on 2016/10/17.
 */
var fs=require("fs");

//读取指定目录
fs.readdir("./../",function(err,files){
    if(err){
        console.info(err);
    }else{
        console.info(files);
    }
});

fs.readdir("./../task03",function(err,files){
    if(err){
        console.info(err);
    }else{
        console.info(files);
        for(var i=0;i<files.length;i++){
            //console.info(files[i]);
            fs.stat("./../task03/"+files[i],function(err,info){//检查文件或目录在信息
                if(err){
                    console.info(err);
                }else{
                    console.info(info.size); //获取文件的大小，如果是一个目录，则返回0
                    console.info(info.isFile()); //判断是否是文件
                    console.info(info.isDirectory()); //判断是否是目录
                }
            });
        }
    }
});
