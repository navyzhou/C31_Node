/**
 * Created by Administrator on 2016/10/11.
 */
var http=require("http");

var server=http.createServer(); //创建一个http服务器

server.on("ycEvent",function(arg1,arg2,arg3){
    console.info("自定义事件...");
    console.info(arg1+"  "+arg2+"  "+arg3);
});

//手动触发一个事件
server.emit("ycEvent",10,20,30);

server.listen(80);