
const Pj = require('../models/pj.js')

const getPjs = function(req,res){
  Pj.find({}).then(function(pj){
    console.log(pj.body)
		return res.send(pj)
	}).catch(function(error){
		return res.status(500).send(error)
	})
}

const getPjById = function(req, res) {
  _id = req.params.id
  Pj.findById(_id).then(function(pj) {
    console.log(pj)
    return res.send(pj)
  }).catch(function(error) {
    return res.status(404).send(error)
  })
}

const createPj = function(req, res) {
  const pj = new Pj(req.body)
  pj.save().then(function() {
    return res.send({"message" : "Personaje registrado"})
  }).catch(function(error) {
    return res.status(400).send(error)
  })
}

const updatePjById = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'age', 'father', 'mother']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Pj.findByIdAndUpdate(_id, req.body ).then(function(pj) {
    if (!pj) {
      return res.status(404).send({})
    }
    return res.send(pj)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}

const deletePjById = function(req, res) {
  const _id = req.params.id
  Pj.findByIdAndDelete(_id).then(function(pj){
    if(!pj) {
      return res.status(404).send({})
    }
    return res.send(pj)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}

module.exports = {
	getPjs,
	getPjById,
	createPj,
	updatePjById,
	deletePjById
}