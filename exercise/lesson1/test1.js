// 注意自定义模块的引入需要用./+模块名，而原生模块直接使用模块名引入
var exports = require('./exports');
var exports1 = require('./exports1');
// console.log(exports);
// // { data: { username: '黑黝黝', age: 22, comment: '自定义模块' },
// //   hobby: '兵兵球',
// //   username: { username: '嘿嘿呵' } }


// console.log(exports.username);//{ username: '嘿嘿呵' }
// console.log(exports.data.username);//'黑黝黝'

// console.log(exports1);//{}
console.log(exports1);//丫丫
console.log(exports1.username);//undefined