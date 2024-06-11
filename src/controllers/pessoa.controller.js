const database = require('../models');

class PessoaController{
  static async getAll(req,res){
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      res.status(200).json({status:true, data: listaDePessoas});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports =PessoaController;