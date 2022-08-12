const express = require('express');
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use('/api', api);

app.get('/notes' , (req,res) => {
    res.sendFile(`${__dirname}/public/notes.html`)
    // console.log(`${req.method}`)
    // console.log(__dirname)
})


app.listen(PORT, () => console.log(`We are live throgh Port : ${PORT} 🚨`))