'use strict';

const Controller = require('egg').Controller;

//User控制层
class UserController extends Controller {
  
  //欢迎页面
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.UserModel.findByPk(1);
  }
  
}//e


function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  }

module.exports=UserController;
