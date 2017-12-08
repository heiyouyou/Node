// 载入事件模块
var events = require("events");
// 创建事件对象
var eventEmitter = new events.EventEmitter();
// console.log(eventEmitter);
// // 注册事件
// eventEmitter.on("error",function(){//注册对象发生错误，而触发
// 	console.log("error事件被触发.....");
// });
// eventEmitter.on("rem",function(){//可以注册不存在的事件
// 	console.log("rem事件被触发.....");
// });
// eventEmitter.on("newListener",function(){//有新的注册事件就触发
// 	console.log("newListener事件被触发.....");
// });
// eventEmitter.on("removeListener",function(){//移除事件就触发
// 	console.log("removeListener事件被触发.....");
// });
// setTimeout(function(){
// 	//自动触发事件
// 	eventEmitter.emit("error");//error事件被触发.....
// 	eventEmitter.emit("removeListener");//removeListener事件被触发.....
// 	eventEmitter.emit("newListener");//newListener事件被触发.....
// 	eventEmitter.emit("rem");//rem事件被触发.....
// },1000)

// 默认情况下，EventEmitters 如果你添加的监听器超过10个就会输出警告信息。setMaxListeners函数用于提高监听器的默认限制的数量。
eventEmitter.setMaxListeners(16);
// 可以多次绑定同一个事件
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
eventEmitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
// 触发时可以传递参数过去
eventEmitter.emit("someEvent","arg1参数","arg2参数");
// 为指定事件添加一个监听器到监听器数组的尾部。
var listener1 = function(){
	console.log("监听了connection事件");
};
eventEmitter.addListener("connection",listener1);
eventEmitter.emit("connection");
var eventEmitter1 = new events.EventEmitter();
// 为指定事件注册一个单次监听器，即:监听器最多只会触发一次，触发后立刻解除该监听器。
eventEmitter1.once("error",function(){
	console.log("eventEmitter1注册了一个一次性的error事件");
});
eventEmitter1.emit("error");
// 从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
eventEmitter.removeListener("connection",listener1);
eventEmitter.emit("connection");
console.log("connection事件监听器移除...");
// 移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器。
// eventEmitter.removeAllListeners();//移除所有事件监听器
// eventEmitter.emit("someEvent");//无法触发
eventEmitter.removeAllListeners("connection");//移除某个事件监听器
eventEmitter.emit("connection");//无法触发
// 返回指定事件的监听器数组。
var listeners = eventEmitter.listeners("someEvent");
console.log("someEvent监听器的个数："+listeners.length);//12

// 按参数的顺序执行每个监听器，如果事件有注册监听返回true，否则返回false。
var flag = eventEmitter.emit("update","arg1参数","arg2参数");
console.log("update的标示："+flag);//false

// events.EventEmitter类方法：返回指定事件的监听器数量
var listenerCount = events.EventEmitter.listenerCount(eventEmitter,"someEvent");
console.log(listenerCount);//12