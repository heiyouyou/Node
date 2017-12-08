// Function.prototype.show = function(){
// 	console.log("我是函数的原型对象");
// };
// Object.prototype.say = function(){
// 	console.log("我是Object的原型对象");
// };
// var test = function(){};
// var test1 = function(){};
// test.show();
// test1.show();
// console.log("========");
// test.say();
// test1.say();
// console.log(Function.prototype);
// console.log(Function.prototype.__proto__);//__proto__获取父类的原型对象，默认情况Object的原型对象

var num = 243.32;
console.log(num.toFixed(1));//取一位小数
num.age = 23;
console.log(num.age);//undefined
var json = {
	name:"黑黝黝",
	age:"23"
};
console.log(json.age);//23
json.age = 22;
console.log(json.age);//22
Object.freeze(json);//冻结json对象防止改变属性方法
json.age = 21;
console.log(json.age);//22