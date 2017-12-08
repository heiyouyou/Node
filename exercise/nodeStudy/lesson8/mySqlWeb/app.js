// 载入自定义模块
var wquery = require("./mysqlConnection.js");

//数据库字段
var params = {
	username:"weill",
	password:"123456",
	sex:0,
	comment:"你很好。。。"
}
// 插入数据的sql语句
// var sql = 'INSERT user_comment (username,password,sex,comment)VALUES(?,?,?,?);'//多个字段用问号表示动态添加
// 查询的sql语句
var sql = 'SELECT * FROM user_comment';
wquery.query(sql,params,function(result){
	// console.log(result);//拿到json数组
	result.map(x=>{
		console.log("username："+x.username);
	});
	console.log("结束.....");
});