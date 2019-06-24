const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route for getting all movies
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "id"`;
  pool.query(queryText)
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log("Error completing SELECT movies query", error);
      res.sendStatus(500);
    });
});
//route for getting selected movies for specific movies
router.get('/details', (req, res) => {
  pool.query(`SELECT "name", "genres"."id" FROM "genres"
 JOIN "movies_genres" ON "genres"."id"="movies_genres"."genres_id"
 JOIN "movies" ON "movies"."id"="movies_genres"."movies_id"
 WHERE "movies_genres"."movies_id"=$1
 ORDER BY "genres"."id";`, [req.query.id])
    .then((result) => {
      res.send(result.rows)
    }).catch((err) => {
      console.log('Error completing SELECT details query', err);
      res.sendStatus(500);
    })
})

//put request
router.put('/edit', (req, res) => {
  console.log('route hit', req.body)
  pool.query(`UPDATE "movies"
  SET "title"=$1, "description"=$2
  WHERE "id"=$3;`, [req.body.title, req.body.description, req.body.id])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error completing UPDATE of movies", error);
      res.sendStatus(500);
    });
});


module.exports = router;