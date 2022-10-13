exports.keys = 'hyang7';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl':'nunjucks'
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

exports.middleware = ['robot', 'gzip', 'graphql'];
exports.robot = {
    ua: [/Baiduspider/i]
}

exports.gzip = {
    threshold: 1024
}

exports.graphql = {
    router: '/graphql',
    // 是否加载到app上
    app: true,
    // 是否加载到agent上，默认false
    agent: false
}