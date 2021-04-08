
/*****************************Router***************************
*1.Router 主要用来描述请求 URL 和具体承担执行动作的 Controller 的对应关系,框架约定了 app/router.js 文件用于统一所有路由规则
*2.请求url支持的url模板风格
  1)restful风格接口
  2)非restful风格接口(常用)
*/
class index{
  async index(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = index;
