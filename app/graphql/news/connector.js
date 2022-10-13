'use strict'

// connector为连接数据的具体体现

// dataloader 能大幅度降低数据库的访问频次
const DataLoader = require('dataloader');

class NewsConnector {
    constructor(ctx){
        this.ctx = ctx;
        this.loader = new DataLoader(this.fetch.bind(this));
    }

    fetch(page){
        const news = this.ctx.service.news;
        return new Promise(function(resolve,reject){
            const newsInfo = news.list(page || 1);
            resolve([newsInfo])
        })
    }

    fetchByPage(page){
        return this.loader.load(page);
    }
}

module.exports = NewsConnector;