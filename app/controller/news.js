const Controller = require('egg').Controller;

class NewsController extends Controller {
    // 直接调用service
    async list (){
        // url中获取page字段
        const page = this.ctx.query.page || 1;
        const newList = await this.ctx.service.news.list(page);
        await this.ctx.render('news/list.tpl',{list: newList})
    }

    // 调用graphql service
    async graphqlList(){
        // url中获取page字段
        const page = this.ctx.query.page || 1;
        const query = JSON.stringify({
            query: `{news(page: ${page}) { id time url title }}`
        })
        const newList = await this.ctx.service.graphql.query(query)

        this.ctx.body = newList;
    }
}

module.exports = NewsController;