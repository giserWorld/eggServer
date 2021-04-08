
/*****************************index***************************
*
*/
class index{
  async index(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = index;
