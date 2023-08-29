const Quote = require('../models/quoteModel')
const router = require('express').Router()

router.get('/', async (req, res) => {

    try {
        const quotes = await Quote.find()
        res.status(200).json({
            length: quotes.length,
            data: {
            quotes
        }})
    } catch (error) {
        res.status(500).json({error: error})
    }
    
})

router.post('/', async (req, res) => {

    const {music, quote, artist} = req.body

    if (!music) {
        res.status(422).json({error: "Nome da música é obrigatório!"})
        return
    }
    if (!quote) {
        res.status(422).json({error: "Citação é obrigatória!"})
        return
    }
    if (!artist) {
        res.status(422).json({error: "Nome do artista é obrigatório!"})
        return
    }

    const quotes = {
        music, 
        quote,
        artist
    }

    try {
        await Quote.create(quotes)
        res.status(201).json({msg: "Citação criada com sucesso!"})
    } catch (err) {
        res.status(500).json({msg: "Erro ao adicionar citação!"})
    }

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const quotes = await Quote.findOne({ _id:id })

    if(!quotes) {
        res.status(422).json({ message: 'Citação não encontrada' })
        return
    }

    try {
        await Quote.deleteOne({_id: id})
        res.status(200).json({ message: 'Citação deletada com sucesso!' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router