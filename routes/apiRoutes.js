// import items needed
const router = require('express').Router();
const store = require('../db/store')
const fs = require('fs');
// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

// create a post request
router.post('/api/notes', async (req, res) => {
    const newNote = await store.
});

// create a delete request


module.exports = router;