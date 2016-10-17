/**
 * Created by Administrator on 2016/10/12.
 */
var fs=require("fs");

//fs.writeFile(file,data,[options],callback);

//要写入的文件   要写入文件的内容   编码集  回调函数
fs.writeFile("yc.txt","源辰信息","utf8",function(err){ //会先将文件中原有的数据删除
    if(err){
        console.info("数据写入失败...");
    }else{
        console.info("数据写入成功...");


        //追加数据
        fs.appendFile("./yc.txt","科技有限公司","utf8",function(err){
            if(err){
                console.info("数据追加失败...");
            }else {
                console.info("数据追加成功...");
            }
        });
    }
});
