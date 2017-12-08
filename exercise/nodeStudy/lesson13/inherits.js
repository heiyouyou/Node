// 载入工具模块
var util = require("util");

function Base(){
	this.name = "heiyouyou";
	this.age = 22;
	this.sayHello = function(){
		console.log("Hello "+this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
}
Base.prototype.hobby = "baseketball";
function Sub(){
	this.name = "luluxiu";
};
// 使用工具类实现原型继承
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
// console.log(objBase.hobby);
var objSub = new Sub();
objSub.showName();
objSub.sayHello();//不能继承构造函数上的方法和属性，只能继承原型对象上的
console.log(objSub);