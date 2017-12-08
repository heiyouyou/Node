Function.prototype.show = function(){
	console.log("我是函数的原型对象");
};
Object.prototype.say = function(){
	console.log("我是Object的原型对象");
};
var test = function(){};
var test1 = function(){};
test.show();
test1.show();
console.log("========");
test.say();
test1.say();