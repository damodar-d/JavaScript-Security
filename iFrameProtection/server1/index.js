import express from 'express'
const app = express()

app.use(express.static('public'))

app.get('/example1', (req, res, next) => {
    res.sendFile(__dirname + '/public/server1.html')
})

app.get('/example2', (req, res, next) => {
    res.sendFile(__dirname + '/public/server2.html')
})
app.listen(3010, () => { })