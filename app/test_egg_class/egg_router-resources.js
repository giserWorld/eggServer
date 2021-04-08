'use strict';

const Controller = require('egg').Controller;

/*****************************resources快速定义路由***************************
*1.RESTful的方式来定义CRUD路由结构
*2.app.router.resources('routerName', 'pathMatch', controller),自定路由映射,controller为.js文件目录,不是方法
*3.CRUD路由结构对应方法:
  1)exports.index = async () => {};
  2)exports.new = async () => {};
  3)exports.create = async () => {};
  4)exports.show = async () => {};
  5)exports.edit = async () => {};
  6)exports.update = async () => {};
  7)exports.destroy = async () => {};
*/
class indexController extends Controller {
  //欢迎页面
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
}//e

module.exports=indexController;
