const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body
    try {
        const query = 'INSERT INTO usoia (usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana) VALUES (?, ?, ?, ?, ?, ?, ?);'
        con.query(query, [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ error: 'Erro ao cadastrar usos de IA' })
            } else {
                const novoUso = req.body
                novoUso.id = results.insertId
                res.status(201).json({ message: 'Uso cadastrado com sucesso', user: novoUso })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao cadastrar uso de IA', details: 'Informe {usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana}' })
    }
}

const listar = (req, res) => {
    const query = 'select * from usoia;'
    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar usos de IA' })
        } else {
            res.json(results)
        }
    })
}

module.exports = {
    cadastrar,
    listar
}