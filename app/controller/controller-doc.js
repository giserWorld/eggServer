'use strict';

const Controller = require('egg').Controller;

/*****************************controller-doc***************************
*1.Controller 必须定义在 app/controller 目录中
*2.一个Controller文件里面也可以包含多个 Controller 定义,可以通过 ${fileName}.${functionName} 的方式指定对应的 Controller
*3.请求url接口最终映射为方法,与java相同
*4.Controller 支持子目录，在定义路由的时候，可以通过 ${directoryName}.${fileName}.${functionName} 的方式指定对应的 Controller
*5.
*/
class indexController extends Controller {
  //欢迎页面
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
}//e

module.exports=indexController;
