/**
 * Created by Administrator on 2016/10/11.
 */
//将模板定义为一个类
var __name,__age; //私有变量
var name='匿名',age=20; //公有变量

var yc=function(name,age){
    __name=name;
    __age=age;
}

yc.prototype.setName=function(name){
    __name=name;
}

yc.prototype.getName=function(){
    return __name;
}

yc.prototype.name=name;
yc.prototype.age=age;

module.exports=yc; //将yc对象传递到模块外，即允许在其他模块中调用这个yc中的公共属性和方法