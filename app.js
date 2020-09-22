const express = require('express')
const app = express()


app.get('/register', (req, res) => {
    res.send("Success!")
}).listen(3000)