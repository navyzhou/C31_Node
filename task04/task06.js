/**
 * Created by Administrator on 2016/10/17.
 */
var fs=require("fs");

var file=fs.createReadStream("./yc.txt",{start:0,end:2});

file.on("open",function(fd){
    console.info("打开文件...");
});

file.on("data",function(data){
   console.info("读到的数据为:"+data.toString());
});

file.on("end",function(){
    console.info("文件读取完成...");
});

file.on("close",function(){
    console.info("文件正在关闭...");
});

file.on("error",function(err){
    console.info(err);
})