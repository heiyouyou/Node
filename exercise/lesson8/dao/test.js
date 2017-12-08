// 获取连接对象
var mongoose = require('../core/connection');
// 定义集合(表)字段
var TestSechma = mongoose.Schema({
    username:String,
    age:Number, 
    sex:{type:String,default:'未知'}
});
// 创建集合（表）
var Test = mongoose.model('Test',TestSechma);
// 将表对象导出去，将其具体业务数据交给外面处理
module.exports = Test;