'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
//接口路由映射
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};
