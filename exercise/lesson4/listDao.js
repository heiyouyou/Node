/**
 * Created by Administrator on 2017/1/7.
 */
//    单例对象产生了类
var singleClass = require('./courseDao');
var single = new singleClass();
//单例对象的生成
var obj1 = single.getInstance('2017/1/5');
exports.obj = obj1;