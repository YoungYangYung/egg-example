const moment = require('moment');

// 扩展工具类
exports.relativeTime = (time)=>moment(new Date(time * 1000)).fromNow();