const router = require('express').Router();

// bring in /notes route with notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

//createa permanent route to respond with the index.html file when ANY other route is hit

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router