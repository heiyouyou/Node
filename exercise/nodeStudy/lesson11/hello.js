// exports.world = function(){
// 	console.log("hello world....");
// };

// function Hello() { 
// 	var name; 
// 	this.setName = function(thyName) { 
// 		name = thyName; 
// 	}; 
// 	this.sayHello = function() { 
// 		console.log('Hello ' + name); 
// 	}; 
// };

// 导出的接口对象就是Hello本身
// module.exports = Hello;
// 或者以匿名函数的格式
// module.exports = function(){
// 	var name; 
// 	this.setName = function(thyName) { 
// 		name = thyName; 
// 	}; 
// 	this.sayHello = function() { 
// 		console.log('Hello ' + name); 
// 	}; 
// };

// module.exports 初始值为一个空对象 {}
// exports 是指向的 module.exports 的引用
// require() 返回的是 module.exports 而不是 exports
console.log(module.exports);//{}
console.log(exports);//{}
module.exports = function(){
	console.log("我是一个匿名函数.....");
};
console.log(module.exports);//[Function]
console.log(exports);//{}
