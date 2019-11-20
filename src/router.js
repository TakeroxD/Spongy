
const express = require('express')
const pjs = require('./controllers/pjs.js')

const router = express.Router()

router.get('/pjs', pjs.getPjs)
router.get('/pjs/:id', pjs.getPjById)
router.post('/pjs', pjs.createPj)
router.patch('/pjs/:id', pjs.updatePjById)
router.delete('/pjs/:id',pjs.deletePjById)

module.exports = router