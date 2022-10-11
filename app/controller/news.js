const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list (){
        // url中获取page字段
        const page = this.ctx.query.page || 1;
        const newList = await this.ctx.service.news.list(page);
        console.log('==newList',page)

        await this.ctx.render('news/list.tpl',{list: newList})
    }
}

module.exports = NewsController;