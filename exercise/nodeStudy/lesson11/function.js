// function say(word){
// 	console.log(word);
// };
// function execute(someFunction,value){
// 	someFunction(value);
// };
// // execute(say,"你好呀");//你好呀
// // 匿名函数写法
// execute(function(word){console.log(word)},"你好呀");//你好呀

var http = require("http");
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

function onRequest(request,response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
};
http.createServer(onRequest).listen(8888);