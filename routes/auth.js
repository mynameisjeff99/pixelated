// https://www.youtube.com/watch?v=pdd04JzJrDw&t=99s
const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully loged in",
      user: req.user,
    })
  } else {
    res.status(403).json({error: true, message: "Not Authorized"});
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_ORIGIN_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate("google", ["profile", "email"]))

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_ORIGIN_URL);
});

module.exports = router;

