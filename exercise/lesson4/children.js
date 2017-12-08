/**
 * Created by Administrator on 2017/1/6.
 */
var util = require('util');
//载入要继承的父类模块
var parent = require('./parent');
function Children(name,age,sex){
    //构造函数继承
    parent.call(this,name,age,sex);
};
//原型继承，util模块中的inherits(ChildrenConstructor,ParentConstructor),可以实现原型继承
util.inherits(Children,parent);

//注意：自行扩展的原型对象属性和方法不能够放在inherits()方法之前，会被覆盖的。
Children.prototype.sleep = function(){
    console.log(`小孩纸${this.name}要睡觉了...`);
};
//console.log(Children.prototype);
module.exports = Children;