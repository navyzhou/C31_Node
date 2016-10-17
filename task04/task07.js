/**
 * Created by Administrator on 2016/10/17.
 */
var fs=require("fs");

var file=fs.createReadStream("./1.jpg");
var out=fs.createWriteStream("./yc/1.jpg");

file.on("data",function(data){ //读取图片数据
    out.write(data); //将读到的数据写入到指定的文件中
});

file.on("end",function(){ //如果文件已经读完
    out.end(); //输出结束
    console.info("文件复制完成...");
})