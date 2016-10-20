var mysql=require("mysql");

var pool=mysql.createPool({ //创建数据库连接池
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'aaaa',
    database:'yc'
});

pool.getConnection(function(err,con){ //从连接池中获取一个连接，con即为获取到的这个连接
    if(err){
        console.info("获取数据库连接失败...");
    }else{
        //通过拿到的连接来访问数据库
        con.query("select * from adminInfo",function(err,rows){
            con.release(); //用完之后将连接释放给连接池
            if(err){
                console.info("查询数据失败...");
            }else{
                console.info(rows);
                pool.end(); //关闭连接池
            }
        });
    }
});