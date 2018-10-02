const mongodb = require('../config/config')

const ClienteSchema = new mongodb.Schema({
    cpf:  {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    rua: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cep: String,
    cidade: String,
    estado: String
},{
    versionKey: false 
})

module.exports = mongodb.model('Cliente', ClienteSchema)