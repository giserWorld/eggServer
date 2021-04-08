'use strict';

const Controller = require('egg').Controller;

/*****************************index***************************
*1.
*/
class indexController extends Controller {
  //欢迎页面
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
}//e

module.exports=indexController;
