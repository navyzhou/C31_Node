/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");

var server=http.createServer(function(req,resp){
    resp.writeHead(200,"访问成功",{"Content-Type":"text/html;charset=utf-8","Set-Cookie":"name=yc"});
    resp.write("成功访问...");
    resp.end();
}).listen(80,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功....");
    }
});