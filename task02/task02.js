/**
 * Created by Administrator on 2016/10/11.
 */
//once()事件
var http=require("http");

var server=http.createServer();

server.once("request",function(req,resp){ //只会对第一个请求有效
    if(req.url=="/"){
        console.info("有请求过来了....");
    }
});

server.on("request",function(req,resp){
    if(req.url=="/"){
        resp.write("Hello");
        resp.end();
    }
});

server.listen(80);