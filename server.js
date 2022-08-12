const express = require('express');
const dbJson  = require('./db/db.json')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))

app.get('/notes' , (req,res) => {
    res.sendFile(`${__dirname}/public/notes.html`)
    // console.log(`${req.method}`)
    // console.log(__dirname)
})

app.get('/api/notes', (req, res) => {
    console.log(`${req.method}`)
    res.json(dbJson)
})






app.listen(PORT, () => console.log(`We are live throgh Port : ${PORT} 🚨`))