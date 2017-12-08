/**
 * Created by Administrator on 2017/1/7.
 */
var baseDao  = require('./baseDao');
var util = require('util');
//单例对象
var _instance = null;

module.exports = function(){
    function CourseDao(time){
        this.time = time;
        //构造函数继承，当接口父类有需要继承的属性和方法时，就要写，没有则不用写
        baseDao.call(this);
        console.log('实例化了一个单例对象...'+this.time);
    };
    //原型继承
    util.inherits(CourseDao,baseDao);
    //子类具体实现父类的方法
    CourseDao.prototype.save = (name)=>{
        console.log(`${name}数据进行了保存...`);
    };
    CourseDao.prototype.delete = (id)=>{
        console.log(`${id}数据被删除了...`);
    };
    CourseDao.prototype.update = (id)=>{
        console.log(`${id}数据进行了更新...`);
    };
    CourseDao.prototype.find = (opts)=>{
        console.log(`${opts}数据进行了查找...`);
    };
    //单例对象产生的方法
    this.getInstance = function(time){
        if(_instance == null){
            _instance = new CourseDao(time);
        };
        return _instance;
    }
}