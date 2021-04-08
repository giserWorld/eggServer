'use strict';

const Controller = require('egg').Controller;

/*****************************controller_router***************************
*1.从get请求url中获取rest参数
*2."ctx":每一次用户请求会生成一个当前请求的上下文 Context 对象的实例,通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法
*3.ctx属性、方法:
  1)ctx.params:[Object]:restful风格请求参数集合对象,例如:{name:'xiaohong'}
  2)ctx.query:[Object]:非restful风格请求参数集合对象,例如:{name:'xiaohong'}
*****************************sampleDemo***************************
*1.restful风格接口参数
*2.非restful风格接口参数
*/
class routerController extends Controller {
 
  
  //****************2.非restful风格接口参数****************//
  async routerParam_norest() {
    const { ctx } = this;//请求的上下文Context实例

    //获取非restful风格的请求参数,例如:"http://localhost:9008/router/123"
    let params_query=ctx.query;//{name:''}

    console.log(params_query);
    ctx.body = `你好, ${params_query.name}`;
  }//e


  //****************1.restful风格接口参数****************//
  async routerParam_rest() {
    const { ctx } = this;//请求的上下文Context实例

    //获取restful风格的请求参数,例如:"http://localhost:9008/router/123"
    let params_restful=ctx.params;//{name:''}
    console.log(params_restful);
    ctx.body = `你好, ${params_restful.name}`;

  }//e

}//e

module.exports=routerController;
