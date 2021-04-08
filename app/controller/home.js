'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  //欢迎页面
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
