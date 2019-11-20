const mongoose = require('mongoose')

const pjSchema = mongoose.Schema({
	name: {type: String, required: true, unique:true},
	species: {type: String},
	age: {type: Number,
			required:true,
			validate(value){
				if(value < 0)
				{
					throw new Error('Debe ser mayor de 0 años :A')
				}
			}
		},
	father: {type : String},
	mother: {type : String},
	siblings: [{type:String}],
	work: [{type:String}],
	nicknames: [{type:String}]
})

const Pj = mongoose.model('Pj',pjSchema)

module.exports = Pj
