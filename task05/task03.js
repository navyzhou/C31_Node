/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");

var server=http.createServer(function(req,resp){//监听客户端的请求
    console.info("==="+req.socket.remoteAddress); //获取请求的客户端的ip地址
    resp.end("hello world...");
});

server.listen(80);

server.on("listening",function(){ //监听服务器的启动
    console.info("服务器启动成功...");
});

server.on("connection",function(socket){ //监听客户端的连接
    console.info("有人连接上来了...");
    console.info(socket.remoteAddress); //获取客户端的ip地址  remote:远程
});

server.on("error",function(err){ //监听服务器的错误
    console.info(err);
});