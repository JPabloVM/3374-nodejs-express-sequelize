const {Router} = require('express');
const PessoaController = require('../controllers/pessoa.controller.js');

const router = Router();

router.get('/pessoas', PessoaController.getAll);

module.exports=router;