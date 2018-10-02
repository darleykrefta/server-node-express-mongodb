const express = require('express')
const ClienteController = require('../controller/cliente.controller')
const router = express.Router()

router.post('/cliente', ClienteController.post)
router.get('/cliente', ClienteController.get)
router.get('/clientes', ClienteController.getAll)
router.put('/cliente', ClienteController.put)
router.delete('/cliente', ClienteController.delete)
router.get('/error', ClienteController.error)

module.exports = router