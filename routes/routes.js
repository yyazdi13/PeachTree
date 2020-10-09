const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all', (req, res) =>{
    db.find({}).then(function(results){
        res.json(results);
        console.log(results[0])
      }).catch(err =>{
          res.status(500).json('error ' + err);
      })
})


module.exports = router;