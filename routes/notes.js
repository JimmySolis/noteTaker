const note = require('express').Router();
const  {readFromFile, writeToFile, readAndAppend} = require('../helper/fsUtils.js');
const dbJson  = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');




note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    // console.log(`${req.method}`);
    // res.json(`${req.method} request received`);
})

note.post('/', (req, res) => {
    console.log(`${req.method}`)
    const { title, text } = req.body;
    if(title && text){
        const newNote = {
            title,
            text,
            id: uuidv4(),
        }
    const response = {
        status: 'success',
        body: newNote,
      };

    readAndAppend(newNote, './db/db.json');
    console.log(response);
    res.json(response);
    }else{
        res.status(500).json('ERROR in Posting new note!')
    }
});

module.exports = note;