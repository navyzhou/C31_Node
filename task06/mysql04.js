/**
 * Created by Administrator on 2016/10/20.
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

connection.config.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
            return this.escape(values[key]);
        }
        return txt;
    }.bind(this));
};

connection.connect(function(err){
    if(err){
        console.info(err);
    }else{
        //使用别名
        connection.query("update adminInfo set aname=:name where aid=:aid",{name:"田七",aid:4},function(err,result){
            connection.end();
            if(err){
                console.info("更新数据失败...");
               console.info(err);
            } else{
               console.info(result);
            }
        });
    }
})