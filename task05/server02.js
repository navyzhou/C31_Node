var http=require("http");
var fs=require("fs");
var querystring=require("querystring");
var url=require("url");

var server=http.createServer(function(req,resp){
   if(req.url!="/favicon.ico"){
       var urlObj=url.parse(req.url); //将请求url地址转换成一个对象
       if(urlObj.pathname=="/index.html"){ //则返回这个登录页面
           var data=fs.readFileSync("./index.html");
           resp.write(data);
           resp.end();
       }else if(urlObj.pathname=="/userLogin"){
            var param=querystring.parse(urlObj.query); //将url中的查询字符串转成一个对象
            console.info("客户端数据接收完毕...");
            resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            resp.write("<h1>用户名："+param.uname+"</h1>");
            resp.write("<h1>密码："+param.pwd+"</h1>");
            resp.end("完了...");
       }else if(urlObj.pathname=="/regUser"){
           resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
           resp.end("暂无注册功能...");
       }else{
           resp.writeHead(500,{"Content-Type": "text/html;charset=utf-8"});
           resp.end("错误...");
       }
   }
}).listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...");
    }
});