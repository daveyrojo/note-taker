// import items needed
const router = require('express').Router();
const store = require('../db/store')
const noteData = require('../db/db.json')
const fs = require('fs');
// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    res.json(noteData);
})

router.post('/notes', (req, res) => {
    req.body.id = Math.floor(Math.random() * Math.floor(1000));
    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
})

router.post('/notes', (req, res) => {

})
// router.get('/notes', (req, res) => {
//     store
//     .getNotes()
//     .then((notes) => {
//         return res.json(notes);
//     })
//     .catch((err) => res.status(500).json(err));
// })

// // create a post request
// router.post('/api/notes', async (req, res) => {
//     const newNote = await store.getNotes();
//     res.json(newNote);
// });

// // create a delete request


module.exports = router;