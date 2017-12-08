/**
 * Created by Administrator on 2017/1/8.
 */
//路由注册配置文件
module.exports = {
    add:function(req, res, next) {
        //render()渲染模板文件，并且可以返回数据渲染
        res.render('course/add',{name:'add'});//注意：最前面的路径不要有 /，如：/course/add
    },
    edit:function(req, res, next) {
        //res.send('这是一个编辑页面')//响应文本
        res.render('course/edit');//res.render('模板文件的路径')
    },
    search:function(req, res, next) {
        //res.json({name:'search'});//响应对象数据
        res.render('course/search');
    }
}