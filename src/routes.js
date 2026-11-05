const express = require("express")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const Usuario = require('../src/controllers/usuario')
const Uso = require('../src/controllers/usoia')

router.post('/usuario/cadastrar', Usuario.cadastrar)
router.post('/usos/cadastrar', Uso.cadastrar)

router.get('/usuario/listar', Usuario.listar)
router.get('/usos/listar', Uso.listar)



module.exports = router