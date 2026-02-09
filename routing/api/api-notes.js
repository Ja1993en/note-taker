
const noteDb = require('../../db/db.json')
const fs = require('fs');
const uuid = require('../../helper/uuid');
const path = require('path');
const express = require("express");

const router = express.Router();

router.get('/notes', (req,res) => {
 res.json(noteDb);
}) 

router.post('/notes', (req, res) => {
const {noteTitle, noteText} = req.body 
if(noteTitle && noteText){
    noteData = {
        noteTitle,
        noteText,
        id: uuid(),
    }

    noteDb.push(noteData);
    noteStr = JSON.stringify(noteDb);

    fs.writeFile('./db/db.json', noteStr, (err) => {
        err? console.error(err)
        : console.log(
            `Note data for ${noteData.noteTitle} has been written to JSON file`
        )
    });
}
res.json(" Note data was received ")
})


router.delete('/notes/:id', (req, res) => {

})
module.exports = router