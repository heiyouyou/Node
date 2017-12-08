/**
 * Created by Administrator on 2017/1/6.
 */
function Parent(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex= sex;
};
Parent.prototype.eat = function(){
    console.log(`${this.name}在吃饭中....`);
};
Parent.prototype.say = function(){
    console.log(`${this.name}是一个年龄${this.age}岁的${this.sex}`);
}
module.exports = Parent;