/**
 * Created by Administrator on 2016/10/11.
 */
//on方法
var http=require("http");

var server=http.createServer(); //创建一个http服务器

server.on("request",function(req,resp){ //在服务器server上绑定一个对request请求的监听事件
    console.info(req.url);  //  /favicon.ico，这个请求是浏览器发送，这个是默认的页面图标logo
    resp.writeHead(200,{"Content-Type":"text/html,charset=utf-8"});
    resp.write("<meta charset='utf-8'/>");
    if(req.url=="/"){
        resp.write("<h1>你好啊！</h1>");
    }else if(req.url=="/index.html"){
        resp.write("<h1>index.html</h1>");
    }
});

//在同一个事件上绑定多个事件处理函数
server.on("request",function(req,resp){
    if(req.url=="/"){
        resp.write("<h1>哈哈哈哈...</h1>");
    }else if("/favicon.ico"){
        resp.write("没有logo....");
    }
})

var fun=function(req,resp){
    if(req.url=="/"){
        resp.write("<h1>呵呵呵呵...</h1>");
    }
    resp.end();
}

server.on("request",fun);

server.removeListener("request",fun); //移除指定事件

//默认情况下，针对同一个事件最多可以绑定10个事件处理函数，不过可以通过setMaxListeners方法修改最大的绑定数
console.info( server.listeners("request") ); //获取指定事件上的所有事件处理函数

server.listen(80);
