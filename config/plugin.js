'use strict';

/** @type Egg.EggPlugin */

//服务器插件配置
module.exports = {
  //1.开启静态文件访问功能,"http://localhost:7001/public/test.txt"
  static: {
    enable: true,
  },
  //2.开启模板语言
  nunjucks:{
    enable: true,
    package: 'egg-view-nunjucks'
  },
  //3.开启sequelize框架
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
