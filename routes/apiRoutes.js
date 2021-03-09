// import items needed
const router = require('express').Router();
// const store = require('../db/store')
const noteData = require('../db/db.json')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    console.log(noteData);
    res.json(noteData);
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    console.log(req.body.id);
    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
})

router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let noteInfo = JSON.parse(data);
        console.log(noteInfo);
        for (let i = 0; i < noteInfo.length; i++) {
            let note = noteInfo[i];
            if (note.id == req.params.id) {
                console.log('this is the note you are looking for');
                noteInfo.slice(i, 1);
                console.log(noteInfo);
            }
        }
        fs.writeFileSync('./db/db.json', JSON.stringify(noteInfo));
    })

    res.json(noteData)
})


module.exports = router;