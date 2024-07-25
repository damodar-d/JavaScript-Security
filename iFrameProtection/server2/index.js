import express from 'express'
const app = express()


app.get('/iframe-website1', (req, res, next) => {
    res.sendFile(__dirname + './public/iframe-website-1.html')
})

app.get('/iframe-website2', (req, res, next) => {
    res.sendFile(__dirname + './public/iframe-website-2.html')
})

app.use(express.static('/public'))
app.listen(3010,()=>{})