const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// get route for movies!
router.get('/movies', (req, res) =>{
    
    const sqlText = `SELECT * from "movies"`;

        pool.query(sqlText)
        .then( (response) => {
            res.send(response.rows);
        })
        .catch ((error) =>{
            console.log(`error getting movies`, error);
            res.sendStatus(500);
        })
})

module.exports = router;