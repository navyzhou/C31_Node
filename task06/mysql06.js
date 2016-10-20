var mysql=require("mysql");
var fs=require("fs");

var out=fs.createWriteStream("./data.txt"); //将查询出来的数据写入到当前目录下的data.txt文件中
//创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'aaaa',
    database:'yc'
});

out.on("error",function(err){
   console.info("数据写入失败...");
});

connection.connect(function(err){
    if(err){
        console.info(err);
    }else{
        var result=connection.query({sql:"select * from adminInfo a,role r where a.rid=r.rid",nestTables:"_"});
        result.on("error",function(err){
            console.info("出错啦...");
            process.exit(); //退出程序
        }).on("fields",function(fields){ //读取字段信息时触发，即就是列信息
            //console.info(fields);
            //将每个列的名字写入到数据文件中
            var str="";
            fields.forEach(function(field){
                str+=field.name+"\t";
            });
            out.write(str+"\r\n");
        }).on("result",function(row){ //读数据是触发
            //将数据写入数据文件
           //console.info(row);
            connection.pause(); //每读到一条数据，先暂停读取后面的数据
            var str=row.a_aid+"\t"+row.a_aname+"\t"+row.a_pwd+"\t"+row.a_age+"\t";
            str+=row.a_addr+"\t"+row.a_photo+"\t"+row.a_rid+"\t"+row.r_rid+"\t"+row.r_rname+"\r\n"
            out.write(str,function(err){
                if(err){
                    process.exit(); //退出程序
                }else{
                    connection.resume(); //如果当前这条数据写入完成，则恢复数据的读取
                }
            });
        }).on("end",function(){
            console.info("数据写入完成...");
            connection.end();
        });
    }
});