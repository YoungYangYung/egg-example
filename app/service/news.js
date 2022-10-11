const Service = require("egg").Service;

class NewsService extends Service {
    async list(page = 1) {
        // 读取config.default.js里的news配置
        const { pageSize, serverUrl } = this.config.news;

        // 调取api获取新闻id
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page - 1)}"`,
                endAt: `"${pageSize * page - 1}"`,
            },
            dataType: "json",
        });

        const newsList = await Promise.all(Object.keys(idList).map(key=>{
            const url = `${serverUrl}/item/${idList[key]}.json`;
            return this.ctx.curl(url, { dataType: 'json' });
        }))

        return newsList.map(res=>res.data);
    }
}

module.exports = NewsService;
