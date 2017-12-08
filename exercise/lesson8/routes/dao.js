// 载入mongoose数据库组件模块
var mongoose = require('mongoose');
// 连接本地数据库：mongoose.connect('mongodb://ip:端口/数据库名')
mongoose.connect('mongodb://localhost:27017/nodejs');

//创建一个连接对象
var db = mongoose.connection;
// 监听连接成功或者失败
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("数据库连接成功...");
});

//建立一个Schema的文档对象，用于定义集合（表）的字段
var contentSchema = mongoose.Schema({
    title: String,//标题
    ctime: { type: Date, default: Date.now },//创建时间
    content:String,//内容
    link:String,//外部连接
    tags:String,//标签
    cid:Number,//分类id
    hits:{type:Number ,default:1},//点击数
    utime:{type:Date ,default:null},//更新时间
    status:{ type: Number, default: 1},/*0未发布,1发布*/
    isdelete:{ type: Number, default: 0}/*0未删除,1删除,逻辑删除：只是改一个状态，数据还是保留，物理删除：数据库不存在*/
});
// 创建content集合(表)
var Content = mongoose.model('content',contentSchema);
// 文档(数据)插入
// new Content({
//     title:"这是一个mongodb数据的测试文件5",
//     content:"文档是一组键值对。文档具有动态模式。动态模式是指，在同一个集合的文件不必具有相同一组集合的文档字段或结构，并且相同的字段可以保持不同类型的数据。",
//     link:"http://www.yiibai.com/mongodb/mongodb_quick_guide.html",
//     tags:"NodeJS/MongoDB",
//     cid:5
// }).save();

// // 查询所有文档数据，返回的是一个对象数组
// Content.find({},function(err,result){
//     console.log(result.length);
//     console.log("==========");
//     console.log(result);
// });

// // 查询某一条数据
// Content.find({cid:2},function(err,result){
//     console.log(result);
// });

// // 查询发布状态等于1，创建时间ctime比当前时间早的文档数据
// Content.find({status:1}).where('ctime').lt(Date.now()).exec(function(err,result){
//     console.log(result);
// });

// Content.find({status:1}).where('ctime').lt('2017-01-25 11:11:25.226Z').exec(function(err,result){
//     console.log(result);
// });

// 默认查找结果集的第一条数据，可以使用条件查询一条数据，返回的是一个文档对象数据
// Content.findOne({},function(err,result){
//     console.log(result);
//     console.log("======");
// });
// Content.findOne({cid:3},function(err,result){
//     console.log(result);
// });

//修改数据，findOneAndUpdate()第一个参数为条件，第二参数为修改的字段，第三个参数为回调函数
// Content.findOneAndUpdate({cid:2},{title:"这是修改文件....",status:0},function(err,result){
//     console.log('修改成功');
//     console.log(result);
// });
// Content.findByIdAndUpdate({cid:2},{title:"这是修改文件....",status:0},function(err,result){
//     console.log('修改成功');
//     console.log(result);
// });

// Content.update({cid:2},{title:"第二次修改过的文件223..."},function(err,result){
//     console.log("修改成功");
//     console.log(result);
// });

// upsert:表示不存在该条数据则进行插入新数据,默认为false，multi表示是否修改多个文件,默认为false
// Content.update({cid:6},{title:"不存在数据则进行插入文件2..."},{upsert:true,multi:true},function(err,result){
//     console.log("修改成功");
//     console.log(result);
// });

// 删除数据
Content.remove({cid:1},function(err){
    if(err) return handleError(err);
    console.log("删除成功...");
});
