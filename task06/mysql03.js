var mysql=require("mysql");

//创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'aaaa',
    database:'yc'
});

//连接到数据库
connection.connect(function(err){
    if(err){
        console.info(err);
    }else{
        //操作数据
        connection.query("select * from adminInfo",function(err,result){
            if(err){
                console.info(err);
            }else{
                console.info(result);
            }
            connection.end();
        });
    }

});

connection.on("error",function(err){
    if(err) {
        if(err.code=="PROTOCOL_CONNECTION_LOST"){
            console.info("数据库连接失败...");
        }
        console.info(err);
    }
});