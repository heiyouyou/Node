// 载入mysql模块
var mysql = require("mysql");
// 配置参数与数据库的一致
var options = {
	host:"localhost",//主机名
	port:3306,//端口号
	user:"root",//数据库用户名
	password:"youyouhei",//数据库密码
	database:"myweb"//数据库名
}
// 创建连接
// var connection = mysql.createConnection(options);
// 创建连接池
var pool = mysql.createPool(options);
// 封装查询语句
// query(sql,params);
function query(sql,params,callback){
	// connection.connect(function(err){
	// 	if(err){
	// 		console.log(err.message);
	// 	}else{
	// 		//query参数： 1.sql语句，2.参数配置，3.回调函数
	// 		// Object.keys(params).map(x=>params[x])相当于Object.keys(params).map(function(x){map返回一个新数组
	// 		// 	return params[x];//x为params对象中的key值
	// 		// });
	// 		// params只能是数组或者一个值,Object.keys(params)返回的是一个key数组
	// 		connection.query(sql,Object.keys(params).map(x=>params[x]),function(err,result){
	// 			if(err){
	// 				console.log(err.message);
	// 			}else{
	// 				// console.log(result);
	// 				if(callback)callback.call(this,result);
	// 				connection.end();//连接终止
	// 			}
	// 		});
	// 	}
	// });
	//连接池获取连接 
	pool.getConnection(function(err){
		if(err){
			console.log(err.message);
		}else{
			//query参数： 1.sql语句，2.参数配置，3.回调函数
			// Object.keys(params).map(x=>params[x])相当于Object.keys(params).map(function(x){map返回一个新数组
			// 	return params[x];//x为params对象中的key值
			// });
			// params只能是数组或者一个值
			pool.query(sql,Object.keys(params).map(x=>params[x]),function(err,result){
				if(err){
					console.log(err.message);
				}else{
					// console.log(result);
					if(callback)callback.call(this,result);
					// pool.end();//注意连接池，不用手动关闭，它有一个自动关闭和开启的时间
				}
			});
		}
	});
};
// 自定义模块导出
// module.exports.query = query;
exports.query = query;