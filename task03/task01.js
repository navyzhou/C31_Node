/**
 * Created by Administrator on 2016/10/12.
 */
var str='{"name":"yc","age":"20"}';
var buf=new Buffer(str);
var json=buf.toString(); //返回的是一个json类型的字符串
console.info(json.name); //所以此时取值失败
json=JSON.parse(json); //将json类型的字符串转为json对象
console.info(json.name);


var buf1=new Buffer(JSON.stringify(json)); //将json对象变成json格式的字符串
console.info(buf1);
