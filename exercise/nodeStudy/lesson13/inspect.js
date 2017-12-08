var util = require("util");
function Person(){
	this.name = "heiyouyou";
	this.toString = function(){
		return this.name;
	};
};
var obj = new Person();
console.log("一个参数.....");
console.log(util.inspect(obj));
console.log(typeof util.inspect(obj));//string
console.log("多个参数.....");
console.log(util.inspect(obj,true));
console.log(util.inspect(obj,true,null,true));