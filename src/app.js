
require('./db/db.js')
const express = require('express')
const app = express()
const router = require('./router.js')

const port=process.env.PORT || 3000
app.use(express.json())
app.use(router)

app.listen(port,function(){
	console.log('Server up up up baby! on port ',port)
})