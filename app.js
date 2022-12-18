const express = require('express')
const port = process.env.PORT || 3000


const app = express()
app.set('view engine', 'hbs')

app.get('/', function(req, res) {

    res.send('<h1>Strona z EXPRESS</h1>')
})

app.get('/about', function(req, res) {

    res.render('index', {
        tytul: 'strona z exxpres',
        tresc: 'strona testowa'
    })
})


app.listen(port)
