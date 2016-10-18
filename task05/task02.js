/**
 * Created by Administrator on 2016/10/18.
 */
var http=require("http");

var server=http.createServer();

server.on("request",function(req,resp){
    console.info(req.url);
    resp.end("Hello world");
});

//如果指定了ip地址，则只能通过这个ip访问。如果是缺省，则监听所有的本机ip
//server.listen(80,"192.168.1.13",function(err){
//    if(err){
//        console.info(err);
//    }else{
//        console.info("服务器启动成功...")
//    }
//});

/*如果监听的端口为0，则说明随机分配一个端口号*/
var obj=server.listen(0,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功...")
    }
});


//获取服务器的地址信息
console.info(obj.address());