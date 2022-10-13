'use strict'

// resolver是数据类型的具体体现

module.exports = {
    Query: {
        news(root, {page}, ctx){
            console.log('===root',root)
            return ctx.connector.news.fetchByPage(page || 1)
        }
    }
}