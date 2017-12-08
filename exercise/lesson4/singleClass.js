/**
 * Created by Administrator on 2017/1/7.
 */
//    单例对象产生了类
var singleClass = require('./courseDao');
var single = new singleClass();

//另一个文件的单例对象
var singleObj = require('./listDao').obj;

//单例对象的生成
var obj1 = single.getInstance('2017/1/6');
var obj2 = single.getInstance('2017/1/7');
var obj3 = single.getInstance('2017/1/8');
console.log('single=====');
console.log(obj1===obj2);//true
console.log(obj1===obj3);//true
console.log(obj3===obj2);//true
var single1 = new singleClass();
console.log('single1=====');
var obj4 = single.getInstance('2017/1/9');
console.log(obj3===obj2);//true
console.log(obj3===singleObj);//true