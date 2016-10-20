var mysql=require("mysql");
//创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'aaaa',
    database:'yc'
});
connection.connect(function(err){
    if(err){
        console.info(err);
    }else{
        //如果两个表中存在同名列，则可以使用重命名的方法解决
        //connection.query("select a.*,rname,r.rid r_rid from adminInfo a,role r where a.rid=r.rid",function(err,result){

        //分表显示
        //onnection.query({sql:"select * from adminInfo a,role r where a.rid=r.rid",nestTables:true},function(err,result){

        //用_将表名和列名连在一起作为结果集中列的名字
        connection.query({sql:"select * from adminInfo a,role r where a.rid=r.rid",nestTables:"_"},function(err,result){
            connection.end();
            if(err){
                console.info("更新数据失败...");
                console.info(err);
            } else{
                console.info(result);
            }
        });
    }
});