
/*****************************实体模型(实体类)***************************
*1.Sequelize数据类型:
  1)INTEGER:整型
  2)STRING:字符串
  3)DATE:日期
*/
class index{
  async index(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = index;
