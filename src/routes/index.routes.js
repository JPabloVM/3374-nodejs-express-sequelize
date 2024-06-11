const express = require('express');
const pessoas = require('./pessoas.routes.js');

module.exports = app =>{
  app.use(
    express.json(),
    pessoas
  );

  app.get('/teste', (req, res) => {
    res
      .status(200)
      .send({ mensagem: 'boas-vindas à API' });
  });
};