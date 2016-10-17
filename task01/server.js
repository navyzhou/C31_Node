/**
 * Created by Administrator on 16-10-10.
 */
 var http=require("http"); //引入模块

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html,charset=utf-8"});
    response.write("<meta charset='utf-8'/>");
    response.write("<h1>你好，世界!</h1>");
    response.end();
}).listen(80);
//连缀
console.info("Server 启动成功...");