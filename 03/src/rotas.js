const express = require('express')
const enderecos = require('./controllers/enderecos')

const rotas = express()

rotas.get('/enderecos/:cep', enderecos.procurarEndereco)


module.exports = rotas