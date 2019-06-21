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
    pool
      .query(queryGenres)
      .then(results => {
        console.log(results.rows);
        res.send(results.rows);
      })
      .catch(error => {
        console.log("Error completing SELECT genres query", error);
        res.sendStatus(500);
      });
  });

module.exports = router;