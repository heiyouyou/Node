var util = require("util");
console.log(util.isRegExp(/some regexp/));//true
console.log(util.isRegExp(new RegExp("hei")));//true
console.log(util.isRegExp({}));//false