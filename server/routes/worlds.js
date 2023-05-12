const router = require('express').Router();
const { Worlds } = require('../db').models;

router.get('/', async (req, res, next) => {
    try {
        const worlds = await Worlds.findAll();
        res.send(worlds);
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const worlds = await Worlds.findByPk(req.params.id);
        res.send(worlds);
    } catch (err) {
        next(err);
    }
})

module.exports = router;