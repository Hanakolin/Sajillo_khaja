const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public/css'))

app.get('/',(req, res)=>{
    res.render('home')
})

app.get('/about',(req, res)=>{
    res.send('he!')
})

app.get('/khai',(req, res)=>{
    res.send('khai!')
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})



