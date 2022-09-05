require('dotenv').config()

const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/save-game', (req, res) => {
	const { user, game_setting } = req.body
	// ADD VALIDATION
	User.findByIdAndUpdate(req.body.user._id, 
    {game_setting: req.body.game_setting},
    function (err, docs) {
      if (err){
        console.log(err)
      } else{
        console.log("Updated User : ", docs);
      }
    })
  }
)

module.exports = router;