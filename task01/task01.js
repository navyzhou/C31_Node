/**
 * Created by Administrator on 16-10-10.
 */
//label跳出多层循环
outter:for(var i=1;i<10;i++){
    for(var j=1;j<=5;j++){
        if(i*j==15){
            break outter;
        }
        console.info("j="+j);
    }
    console.info("i="+i);
}

var req={
    session:{
        user:{name:'yc',addr:"衡阳"}
    }
};

console.info(req.session.user.name);
console.info(req.session.user.addr);

//获取user中的所有属性
//循环对象的指定属性
with(req.session.user){
    console.info(name+"  "+addr);
}
