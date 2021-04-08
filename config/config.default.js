/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615771858760_8955';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

//*****1.配置视图模板引擎*****//
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
//*****2.配置ORM连接数据库*****//
  config.sequelize = {
    dialect:'postgres',//方言,support: mysql, mariadb, postgres, mssql
    host:'localhost',
    database:'javadb',
    port:'5432',
    username:'postgres',
    password:'123456',
    timezone:'+08:00',
    logging:console.log,//日志
    pool:{//连接池
      max:5,
      min:0,
      idle: 10000,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
