/**
 * Created by Administrator on 16-10-10.
 */
/*console.info(global);*/

console.time("yc");
var count=0;

var testFunction=function(msg){
    console.info(msg+" : "+count);
    count++;
    if(count==10){
        clearInterval(timer);
    }
}

var timer=setInterval(testFunction,1000,'This is a paramter');


console.info("打印信息...");
console.log("打印日志...");
console.error("打印错误...");
console.warn("打印警告...");

console.timeEnd("yc");

console.time("yc1");
for(var i=1;i<10000;i++){
    console.info(i);
}
console.timeEnd("yc1");
//console.time(flag)  和 console.timeEnd(flag) 主要用来检测某一段代码的时间复杂度