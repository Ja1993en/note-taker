const path = require('path');
const router = require('express').Router();

// Routing for displaying HTML Files
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));

});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;