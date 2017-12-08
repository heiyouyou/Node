// exports不能够单独定义对象以外的形态进行导出模块，只能是以对象的形式进行
// 模块的导出exports.xxx
// 而module.exports则可以定义成各种形式导出 module.exports = xxx，但是这种在开发过中一定很少使用。

// exports = "黑黝黝";
module.exports = "丫丫";
// 注意nodejs中导出自定义模块，只要一遇上module.exports就会马上导出，后面的代码就
// 不会执行，所以使用module.exports导出自定义的模块，一定要将module.exports放在exports的
// 后面，这样子才会将exports中定义的方法和属性进行合并导出，
exports.username = 'hahha';