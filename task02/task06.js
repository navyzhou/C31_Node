/**
 * Created by Administrator on 2016/10/11.
 */
/*var buf1=new Buffer(10);
console.info(buf1); //以16进制存储的
buf1.fill(0); //用0去填充buf1对象
console.info(buf1);

//用数组来初始化buffer对象
var buf2=new Buffer([10,20,30,40]);
console.info(buf2); //0a 14 1e 28  注意：存入buffer对象时，都会被转成16进制
console.info(buf2.length); //4

//通过一个字符串来创建Buffer实例
var buf3=new Buffer("源辰信息科技有限公司","utf8"); //默认编码为utf8
console.info(buf3);
console.info(buf3.length); //30  因为utf8编码中一个汉字占3个字节，GBK是一个汉字占两个字节
console.info(buf3.toString()); //将buffer对象中的数据已字符串的方式取出


var str="源辰信息科技有限公司";
var buf=new Buffer(str);
console.info(str[2]); //信
console.info(buf[2]); //144

//字符一旦创建则不能修改
str[2]="辰";
console.info(str);

console.info(buf);
//Buffer可以修改
buf[6]=0xe8;
buf[7]=0xbe;
buf[8]=0xb0;
console.info(buf.toString());

var str="源辰信息科技有限公司";
var buf=new Buffer(str);
var buf1=buf.slice(0,12);  //[0,12),包括起点，不包括终点
console.info(buf1.toString());
buf1[6]=0xe8;
buf1[7]=0xbe;
buf1[8]=0xb0;

//由于Buffer对象的slice()方法并不是复制缓存区中的数据，而是与该数据共享内存区域，因此，如果修改使用slice方法取出的数据，则缓存区中保存的数据也将被修改。
console.info(buf.toString());
console.info(buf.toString("utf8",6));
console.info(buf.toString("utf8",6,9)); //注意：一个汉字三个字节，包括起点，不包括终点

//buf.write("源辰信息"); //从头往后开始覆盖
//buf.write("源辰信息",12); //从索引为12的位置开始往后覆盖
buf.write("源辰YCYCYCYCYCYC",12,6); //从索引为12的位置开始往后覆盖，覆盖6个字节
console.info(buf.toString());
 */

var StringDecoder=require("string_decoder").StringDecoder;

var str="源辰信息科技有限公司";
var buf=new Buffer(str);
console.info(buf);

var buf1=new Buffer([0xe6,0xba,0x90,0xe8,0xbe]);
var buf2=new Buffer([0xb0,0xe4,0xbf,0xa1]);

console.info(buf1.toString());
console.info(buf2.toString());

var buf3=Buffer.concat([buf1,buf2]);
console.info(buf3.toString());

var decoder=new StringDecoder();
console.info(decoder.write(buf1));
console.info(decoder.write(buf2));
