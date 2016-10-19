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
        //connection.query("insert into adminInfo values(0,'张三','123','20','湖南衡阳','')",function(err,result){
        connection.query("insert into adminInfo values(0,?,?,?,?,'')",['李四','aaa',20,'湖南岳阳'],function(err,result){
            if(err){
                console.info(err);
            }else{
                console.info(result); //可以通过result.insertId获取添加的这条数据的id值
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