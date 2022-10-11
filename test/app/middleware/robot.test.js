// 测试用例
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('robot.test',()=>{
    it('should block robot', ()=>{
        return app.httpRequest().get('/').set('User-Agent','Baiduspider').expect(403)
    })
})