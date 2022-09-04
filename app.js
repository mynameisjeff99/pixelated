require("dotenv").config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require("express-session");
const passport = require("passport");
//const Auth0Strategy = require("passport-auth0");
const connectDB = require('./config/db');
//const cookieSession = require("cookie-session");
const authRoute = require('./routes/auth');
const passportStrategy = require('./config/passport');
//const user = require('./routes/api/user');

// App variables
const app = express();
const port = process.env.PORT || 8000;

// Connect to mongoDB
connectDB();

app.use(expressSession({
  secret: 'secrettexthere',
  saveUninitialized: false,
  resave: false,
  cookie: {
      maxAge: 60000 * 60 * 24
  }
}))

/*
app.use(
  cookieSession({
    name: "session",
    keys: ["pixelated"],
    maxAge: 24 * 60 * 60 * 100,
  })
)
*/

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
)

app.use("/auth", authRoute)

app.listen(port, () => console.log(`Server running on port ${port}`));

// Session Configuration
/*const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
}; 

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

// Passport Configuration
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);


// App configuration
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/user', user);

app.listen(port, () => console.log(`Server running on port ${port}`));
*/