const ClienteModel = require('../model/cliente.model')

exports.post = (req, res) => {
    if (!req.body) {
        return res.status(400).send('Sem dados no body!')
    }

    let model = new ClienteModel(req.body)
    model.save().then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.get = (req, res) => {
    if (!req.query.cpf) {
        return res.status(400).send('Está faltando o parametro de busca cpf!')
    }

    ClienteModel.findOne({
        cpf: req.query.cpf
    }).then(cliente => {
        res.json(cliente)
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.getAll = (req, res) => {
    ClienteModel.find().then(cliente => {
        res.json(cliente)
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.put = (req, res) => {
    if (!req.query.cpf) {
        return res.status(400).send('Está faltando o parametro de busca cpf!')
    }

    ClienteModel.findOneAndUpdate({
        cpf: req.query.cpf
    }, req.body, {
        new: true
    }).then(cliente => {
        res.json(cliente)
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.delete = (req, res) => {
    if (!req.query.cpf) {
        return res.status(400).send('Está faltando o parametro de busca cpf!')
    }

    ClienteModel.findOneAndRemove({
        cpf: req.query.cpf
    }).then(cliente => {
        res.json(cliente)
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.error = (req, res) => {
    throw new Error('Deu erro brow!')
}