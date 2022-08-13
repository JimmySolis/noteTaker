const note = require('express').Router();
const  {readFromFile, writeToFile, readAndAppend} = require('../helper/fsUtils.js');
let dbJson  = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
// const removeNote = require('../helper/noteRemover');




note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
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

    readAndAppend(newNote, './db/db.json')
    console.log(response);
    res.json(response);
    }else{
        res.status(500).json('ERROR in Posting new note!')
    }
});

note.delete('/:id', (req,res) => {

    const { id } = req.params;

    const deleted = dbJson.find(dbJson => dbJson.id === id)
    if(deleted){
        console.info(`${req.method} request recived to get a single note`);
       dbJson = dbJson.filter(dbJson => dbJson.id != id);

       res.json(writeToFile('./db/db.json', dbJson))

    //   res.status(200).json(dbJson);
        
        } else {
        res.status(404).json({ Message : 'Hitting the else in note.delete'})
    }
});

module.exports = note;