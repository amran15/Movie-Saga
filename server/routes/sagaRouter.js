const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const queryMovies = "SELECT * FROM movies";
  pool
    .query(queryMovies)
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log("Error completing SELECT movies query", error);
      res.sendStatus(500);
    });
});

router.get('/genres', (req, res) => {
  const queryGenres = "SELECT * FROM genres";
  pool.query(queryGenres)
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log("Error completing SELECT genres query", error);
      res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
  pool.query(`SELECT "name" FROM "genres"
 JOIN "movies_genres" ON "genres"."id"="movies_genres"."genres_id"
 JOIN "movies" ON "movies"."id"="movies_genres"."movies_id"
 WHERE "movies_genres"."movies_id"=$1
 ORDER BY "genres"."id";`, [req.params.id])
    .then((result) => {
      res.send(result.rows)
    }).catch((err) => {
      console.log('Error completing SELECT details query', err);
      res.sendStatus(500);
    })


})

module.exports = router;