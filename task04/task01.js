/**
 * Created by Administrator on 2016/10/17.
 */
/*
    fs.readFile(fileName,[options],function(err,data){});
    fs.writeFile(fileName,data,[options],function(err){});
    fs.appendFile(fileName,data,[options],function(err));
    fs.open(fileName,flags,[mode],function(err,fd){});
    fs.read(fd,buffer,offset,length,position,function(err,len,buffer){});
    fs.write(fd,buffer,offset,length,position,function(err,len,buffer){});

    fs.fsync(fd[,callback]);  fs.fsyncsync(fd);  //刷缓冲区中在数据
    fs.close(fd,function(err){});   fs.closeSync(fd); //关闭文件
 */

var fs=require("fs");
//创建文件夹
fs.mkdir("./yc",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("目录创建完成...");
    }
});