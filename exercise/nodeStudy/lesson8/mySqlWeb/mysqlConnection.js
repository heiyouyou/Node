// 载入mysql模块
var mysql = require("mysql");
// 配置参数与数据库的一致
var options = {
	host:"localhost",//主机名
	port:3306,//端口号
	user:"root",//数据库用户名
	password:"youyouhei",//数据库密码
	database:"myweb"//数据名
}
// 创建连接
// var connection = mysql.createConnection(options);
// 创建连接池
var pool = mysql.createPool(options);
// query(sql,params);
// 封装查询/插入语句
function query(sql,params,callback){
	// connection.connect(function(err){
	// 	if(err){
	// 		console.log(err.message);
	// 	}else{
	// 		//query参数： 1.sql语句，2.参数配置，3.回调函数
	// 		// Object.keys(params).map(x=>params[x])相当于Object.keys(params).map(function(x){map返回一个新数组
	// 		// 	return params[x];//x为params对象中的key值
	// 		// });
	// 		// params只能是数组或者一个值
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
					pool.end();
				}
			});
		}
	});
};
// 自定义模块导出
// module.exports.query = query;
exports.query = query;