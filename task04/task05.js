/**
 * Created by Administrator on 2016/10/17.
 */
//删除指定的目录
var fs=require("fs");
//删除指定目录的方法
function del(path){
    var stats=fs.statSync(path);
    if(stats.isFile()){  //如果是文件则删除
        fs.unlink(path);
    }else if(stats.isDirectory()){ //如果你是一个目录
        //先判断是否是一个空目录
        var files=fs.readdirSync(path);
        if(files.length<=0){ //说明是一个空目录
            fs.rmdir(path);
        }else{ //如果不是一个空目录，则必须先删除目录下的子文件或子目录
            for(var i=0;i<files.length;i++){
               del(path+"/"+files[i]);
            }
            //循环结束，说明该目录下的所有子目录和文件以及删除，那么将自己删除
            fs.rmdir(path);
        }
    }
}

del("./../yc");
console.info("删除目录成功....");