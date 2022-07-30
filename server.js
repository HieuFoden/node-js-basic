const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Duong Thi Hoai Thu')
})

app.get('/about', (req, res) => {
    res.send('Pham Trung Hieu')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})