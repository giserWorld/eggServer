'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  
  //user实体类
  const User = app.model.define('tb_user',{
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
  });

  return User;
};