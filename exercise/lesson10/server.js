// 导入创建WebSocket服务的模块----ws，需要进行依赖安装 npm install ws --save-dev
var WebSocket = require("ws");
// 创建一个WebSocket服务
var WebSocketServer = WebSocket.Server;
// 配置端口
var wss = new WebSocketServer({port:8080});
// 导入用来生成uuid，统一标识符
var uuid = require("node-uuid");
// 用来存放每个客户端的WebSocket连接对象的数组
var clientWsArr = [];
// 用来记录新用户的连接个数
var clientIndex = 1;
// 监听客户端的连接，并且每次进入的客户端都是一个全新的ws对象，聊天室是广播的行为
wss.on("connection",function(ws){
    // 为每个客户端的ws生成主键id
    var clientUUID = uuid.v4();
    var nickname = "【新用户"+clientIndex+"】";
    // 存放每个访问进来的客户端对象
    clientWsArr.push({"uuid":clientUUID,"ws":ws,"nickname":nickname,time:new Date().getTime()});
    console.log(nickname+"客户端连接上了...");
    sendMessage("online",clientUUID,nickname,nickname+"进入了聊天室！");
    // 每次进来一个用户，就自增1
    clientIndex++;
    // 监听客户端发送过来的数据
    ws.on("message",function(message){
        // 判断是进行名字更改操作，还是发送聊天信息操作
        if(message.indexOf("wzy")!=-1){
            var newName = message.split("_")[1];
            if(newName){
                sendMessage("update",clientUUID,newName,nickname+"将名字改成了【"+newName+"】");
                nickname = newName;
            }
        }else{
            console.log(nickname+"客户端发送过来的消息是："+message);
            sendMessage("message",clientUUID,nickname,message);  
        }   
    });
    //监听每一个用户关闭聊天页面，在聊天室中通知，用户离开信息，同时把服务器端clientWsArr数组中对应的ws用户删除
    ws.on("close",function(){
        closeSocket(clientUUID,nickname,"当前在线人数："+clientWsArr.length-1);
        console.log(nickname+"离开了聊天室....当前在线人数："+clientWsArr.length);
        // console.log("检查是否删除成功..."+clientWsArr.length);
    });
    //同时监听进程关闭
    process.on("SIGNT",function(){
        console.log("服务器被关了....");
        closeSocket(0,"wzy","服务器被挂起....");
        process.exit();
    });
});

// type:表示发送信息的类型，其中有：上线（online）、离线（leave）、信息（message）、更改（update）
function sendMessage(type,uuid,nickname,message){
    var len = clientWsArr.length;
    if(len > 0){
        for(var i=0;i<len;i++){
            // 获取每一个客户端的socket对象
            var cws = clientWsArr[i].ws;
            // 判断每个客户端的socket对象是否处在连接和打开状态
            if(cws.readyState == WebSocket.OPEN){
                // 将对应的数据推送到客户端
                cws.send(JSON.stringify({
                    "type":type,
                    "uuid":uuid,
                    "nickname":nickname,
                    "message":message,
                    "time":new Date().getTime()
                }));
            }
        }
    }
};
// 关闭连接的方法
function closeSocket(uuid,nickname,message){
    var len = clientWsArr.length;
    if(len>0){
        for(var i=0;i<len;i++){
            // 根据id匹配出当前退出聊天室的用户,进行相关操作
            console.log(clientWsArr[i].uuid+"=="+i);
            if(clientWsArr[i].uuid == uuid){
                // 广播当前退出的用户信息
                sendMessage("leave",uuid,nickname,message);
                // 将退出的用户从数组中剔除
                clientWsArr.splice(i,1);
            }
        }
    }
};


