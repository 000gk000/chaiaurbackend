require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/g',(req,res) => {
    res.send('hello gopal')
})
app.listen(console.log(process.env.PORT), () => {
  console.log(`Example app listening on port ${port}`)
})