/**
 * Created by Administrator on 2016/10/17.
 */
var fs=require("fs");

var total=0;

function getSize(path){
    var stats=fs.statSync(path); //读取用户给定的文件信息

    if(stats.isDirectory()){ //如果是目录
        //获取目录下的所有文件或子目录
        var files=fs.readdirSync(path);

        //循环每一个文件或目录
        for(var i=0;i<files.length;i++){
            getSize(path+"/"+files[i]);
        }
    }else if(stats.isFile()){ //如果是文件
        total+=stats.size; //将将其大小累加
    }
}

getSize("./../task02");

console.info("总大小为："+total);