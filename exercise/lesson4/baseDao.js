/**
 * Created by Administrator on 2017/1/7.
 */
//接口类,用来定义标准,约束后面程序者的命名和高复用，不写业务逻辑代码，只由子类进行继承实现。
function BaseDao(){
    console.log('有子类继承了我...');
}
BaseDao.prototype.save = function(){

};
BaseDao.prototype.delete = function(){

};
BaseDao.prototype.update = function(){

};
BaseDao.prototype.find = function(){

};
module.exports = BaseDao;