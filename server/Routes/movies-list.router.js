const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// get route for movies!
router.get('/', (req, res) =>{

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

router.get(`/:id`, (req, res) =>{
    console.log('hi here this is a check~!!');
    
    const sqlText = `SELECT "movies"."title", "movies"."description", "genres"."name", "movies"."id"
                    FROM "movies_with_genres"
                    JOIN "movies" on "movies"."id" = "movies_with_genres"."movies_id"
                    JOIN "genres" on "genres"."id" = "movies_with_genres"."genres_id"
                    WHERE "movies"."id" = $1
                    ;`;

    value = [req.params.id]

        pool.query(sqlText, value)
        .then( (response) => {
            res.send(response.rows[0]);
        })
        .catch ((error) =>{
            console.log(`error getting movie details`, error);
            res.sendStatus(500);
        })
})


router.put('/edit-page/:id', (req,res) =>{
    
    let detail = req.body;
    let values = [detail.movieId, detail.description, detail.title];
    const sqlText = `UPDATE "movies" SET "description"=$2, "title"=$3 WHERE "id"=$1;`;

     pool.query(sqlText, values)
         .then((response) => {
             res.sendStatus(200);
         })
         .catch((error) => {
                 console.log(`error editing movie details`, error);
                 res.sendStatus(500);
         })
} )


module.exports = router;