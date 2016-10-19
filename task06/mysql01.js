/**
 * Created by Administrator on 2016/10/19.
 */
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
        console.info("连接数据库成功....");

        connection.end(function(err){
            if(err){
                console.info(err);
            }else{
                console.info("数据连接已关闭...");
            }
        });
    }
});