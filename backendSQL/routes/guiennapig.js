var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {

  // steg 1 ansult till DB
  req.app.locals.con.connect((err) => {
    err && console.error(err);
    // skriv query
    let query = "SELECT * FROM guiennapigs"

    req.app.locals.con.query(query, (err, result) => {
      err && console.error(err);

      console.log(result);
      res.json(result)
    })
  });
})
module.exports = router;
