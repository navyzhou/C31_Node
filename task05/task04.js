/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,resp){
    if(req.url!='/favicon.ico'){
        //将所有的请求数据保存到文件中
        var out=fs.createWriteStream("./request.txt");
        out.write("客户端请求的方式为："+req.method+"\r\n");
        out.write("客户端请求的url地址："+req.url+"\r\n");
        out.write("客户端请求头信息为："+JSON.stringify(req.headers)+"\r\n");
        out.write("客户端请求的所使用的协议版本："+req.httpVersion+"\r\n");
        out.end("============未完待续=============\r\n");
        resp.end("===end===");
    }
}).listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...");
    }
});