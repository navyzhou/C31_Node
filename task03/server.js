var http=require("http");
var fs=require("fs");

var server=http.createServer();

server.on("request",function(req,res){
    if(req.url!="/favicon.ico" && req.url!="/") {
        fs.exists("."+req.url,function(exists){
            var data;
            if(exists){
                data = fs.readFileSync("."+req.url);
            }else{
                data = fs.readFileSync("./wzgs/index.html");
            }
            res.write(data);
            res.end();
        })
    }else{
        var data = fs.readFileSync("./wzgs/index.html");
        res.write(data);
        res.end();
    }
});

server.listen(80,function(err){
    if(err) {
        console.info(err);
    }else{
        console.info("服务器已启动...");
    }
})
