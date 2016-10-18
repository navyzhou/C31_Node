/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,resp){
   if(req.url!="/favicon.ico"){
       if(req.url=="/index.html"){ //则返回这个登录页面
           var data=fs.readFileSync("./index.html");
           resp.write(data);
           resp.end();
       }else if(req.url=="/userLogin"){
           //监听客户端发送的数据
           req.on("data", function (data) {
               console.info("客户端发送的请求数据为：" + data);
           });

           req.on("end", function () {
               console.info("客户端数据接收完毕...");

               resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
               resp.end("完了...");
           });
       }else if(req.url=="/regUser"){
           resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
           resp.end("暂无注册功能...");
       }
   }
}).listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...");
    }
});