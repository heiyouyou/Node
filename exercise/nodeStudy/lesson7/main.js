var events = require("events");
var eventEmitter = new events.EventEmitter();
// 监听器1的回调函数
var listener1 = function(){
	console.log("监听器listener1执行...");
}
// 监听器2的回调函数
var listener2 = function(){
	console.log("监听器listener2执行...");
}
// 绑定监听器1
eventEmitter.addListener("connection",listener1);
// 绑定监听器2
eventEmitter.on("connection",listener2);
// 获取监听器的个数
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners + " 个监听器监听连接事件。");
// 触发事件
eventEmitter.emit("connection");
// 移除监听器1
eventEmitter.removeListener("connection",listener1);
console.log("listener1 不再受监听。");
eventEmitter.emit("connection");
eventListeners = events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log("移除监听器后，还有"+eventListeners + " 个监听器监听连接事件。");
console.log("程序结束");
// eventEmitter.on("error",function(){
// 	console.log("有异常出现....");
// });
eventEmitter.emit('error'); 