const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://admin:admin@clustertaco-socc1.mongodb.net/bikinibottom?retryWrites=true&w=majority'

mongoose.connect(connectionURL,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(function(data){
	console.log('Connected bby')
}).catch(function(error){
	console.log('Unable to connect')
})