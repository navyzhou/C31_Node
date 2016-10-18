/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");

var server=http.createServer(function(request,response){
    console.info(request.url);
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.end("你好...");
});

server.listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...")
    }
});