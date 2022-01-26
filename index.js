const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const password = process.env.PASSWORD
/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.send(`Hello Man!, here is your ${password}`)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})