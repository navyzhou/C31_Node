/**
 * Created by Administrator on 2016/10/12.
 */
var fs=require("fs"); //导入对文件或文件夹操作的模块
//异步读取文件
fs.readFile("./yc.txt","utf8",function(err,data){
    if(err){
        console.info(err);
    }else{
        console.info(data); //data中存放的就是读到的文件中的数据
    }
});

//判断指定的文件或目录是否存在
fs.exists("./index.html",function(exists){
    console.info(exists);
})