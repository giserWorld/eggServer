'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
//接口路由映射
module.exports = app => {
  const { router, controller } = app;
  //1.get请求
  router.get('/', controller.home.index);//根目录
  router.get('/news', controller.news.list);//"http://localhost:9008/news"
  router.get('/router', controller.controllerRouter.routerParam_norest);//"http://localhost:9008/router?name=xiaohong"
  router.get('/router_rest/:name', controller.controllerRouter.routerParam_rest);//"http://localhost:9008/router_rest/123"
};
