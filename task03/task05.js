/**
 * Created by Administrator on 2016/10/12.
 */
var fs=require("fs");

//要打开的文件   打开文件的方式(r:读  w:写  a:追加)  回调函数(错误对象,fd指向打开的这个文件的一个引用)
fs.open("./yc.txt","r",function(err,fd){
    var buf=new Buffer(60);
    //从哪个文件开始读 将读到的数据存到哪个buffer中 从哪个位置开始保存  读取多少个字节  从哪个位置开始读
    //err:错误信息，len:读到的字节数  buffer:用来保存读到的数据的buffer对象
    fs.read(fd,buf,0,18,3,function(err,len,buffer){
        console.info(buffer.toString("utf8",0,len));
        console.info(buffer.slice(0,len).toString());
    });
});

/*
 fs.read(fd,buffer,offset,length,position,callback);
 fd：必须为open方法所使用的回调函数中返回的文件描述或openSync方法返回的文件描述符。
 buffer：为一个Buffer对象，用于指定将文件数据读取到哪个缓存区中。
 offset：指定向缓冲区中写入数据时的开始位置。
 length：指定从文件中读取的字节数。
 position：指定读取文件时的开始位置。
 callback：function(err,bytesRead,buffer){}
 */
