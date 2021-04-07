'use strict';

/** @type Egg.EggPlugin */
//服务器插件配置
module.exports = {
  static: {//开启静态文件访问功能,"http://localhost:7001/public/test.txt"
    enable: true,
  },
  nunjucks:{//开启模板语言
    enable: true,
    package: 'egg-view-nunjucks'
  }
};
