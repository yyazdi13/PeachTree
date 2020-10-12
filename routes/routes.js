const express = require('express');
const router = express.Router();
const db = require('../models');

// get all transactions
router.get('/all', (req, res) =>{
    db.find({}).then(function(results){
        res.json(results);
      }).catch(err =>{
          res.status(500).json('error ' + err);
      })
})


// sort by beneficiary asc
router.get('/beneficiary/asc', (req, res) => {
    db.find({}).sort({merchant: 1}).then(function(results, error){
        if(error) throw error;
        else res.json(results);
    }).catch((err)=> {
        console.error(err);
        res.status(500).json('error ' + err);
    })
})


module.exports = router;