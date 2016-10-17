/**
 * Created by Administrator on 2016/10/12.
 */
//buf.copy(targetBuffer,[targetStart],[sourceStart],sourceEnd)
var str="源辰信息科技";
var buf1=new Buffer(str,"utf8");
var buf2=new Buffer(12);
//buf1.copy(buf2);
//buf1.copy(buf2,0,6);
buf1.copy(buf2,0,6,9);
console.info(buf2.toString());

buf2[0]=144;
console.info(buf2.toString());
console.info(buf1.toString());

//isBuffer():用于判断一个对象是否是一个buffer对象
console.info(Buffer.isBuffer(buf1)); //true
console.info(Buffer.isBuffer(str)); //false

//byteLength()：计算一个指定字符串的字节数
console.info(Buffer.byteLength(str,"utf8")); //18
console.info(Buffer.byteLength(str,"utf16le")); //12

//concat(list)
var buf3=new Buffer("有限公司");
var buf4=Buffer.concat([buf1,buf3]);
console.info(buf4.toString());

//isEncoding()检测是否为一个有效的编码集
console.info( Buffer.isEncoding("utf8") ); //true
console.info( Buffer.isEncoding("GBK") ); //false

//length()
console.info(buf2.length);

//equals()
var buf5=new Buffer(str);
console.info( buf5.equals(buf1) ); //true
console.info( buf5.equals(buf3) ); //false

//slice([start],[end])

//fill(value,[offset],[end])