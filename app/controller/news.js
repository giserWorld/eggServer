'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  
  //新闻列表接口
  async list(){
    const { ctx } = this;
    const dataList = {
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
    };
    await ctx.render('./news/list.tpl', dataList);
  }//e

}

module.exports = NewsController;
