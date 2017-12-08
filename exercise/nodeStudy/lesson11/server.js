var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
  	// 将请求的地址转换成对象形式
    // var pathname = url.parse(request.url).pathname;
    var pathname = request.url;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
	route(pathname);
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;