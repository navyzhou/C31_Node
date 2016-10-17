/**
 * Created by Administrator on 2016/10/11.
 */
//相对路径的写法
//var yc=require("./yc"); //require("yc.js"); 如果同文件夹下没有同名文件，则后缀可以省略

//绝对路径
//var yc=require("/node.js/task02/yc");

//导入文件夹模块
//var yc=require("./yc1");
//Node将搜索整个folder目录，Node会假设folder为一个包并试图找到包定义文件package.json。
//如果folder目录里没有包含package.json文件，Node会假设默认主文件为index.js，即会加载index.js。如果index.js也不存在，那么加载将失败。
//如果有package.json文件，则会自动加载package.json中main属性指定的值


/*自动载入缓存的模块
var yc=require("./yc.js");
var yc1=require("./yc.js");
*/

var yc=require("./yc");
//console.info(yc.prototype.name);
//console.info(yc.prototype.age);

var obj=new yc();
console.info(obj);
console.info(obj.name);
console.info(obj.age);
console.info(obj.getName());
obj.setName("YC"); //通过对象的公有方法，修改私有属性name的值
console.info(obj.getName()); //通过公有方法获取私有属性name的值


