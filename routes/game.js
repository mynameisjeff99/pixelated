require('dotenv').config()

const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/save-game', (req, res) => {
  console.log("POST to save-game")
	User.findByIdAndUpdate(req.body.user._id, 
    {game_setting: req.body.game_setting},
    function (err, user) {
      if (err) {
        console.log(err)
      } else {
        console.log("Updated User : ", user)
      }
    })
  }
)

router.get('/restore-game/:id', (req, res) => {
  console.log("GET to restore-game")
  console.log(req.params.id)
	User.findById(req.params.id,
    function (err, user) {
      if (err) {
        console.log(err)
      } else {
        res.json({ game_setting: user.game_setting })
      }
    })
  }
)

module.exports = router;