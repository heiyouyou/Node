/**
 * Created by Administrator on 2017/1/6.
 */
var children = require("./children");
var parent = require("./parent");
var sub = new children("小明",22,"男");
//子类的方法
sub.sleep();
//父类的方法
sub.say();
sub.eat();
console.log("=========");
console.log(sub instanceof children);//true
console.log(sub instanceof parent);//true
//方法子类的父类构造函数可以用：ChildrenConstructor.super_获取
console.log(children.super_);//[Function: Parent]
