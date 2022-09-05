// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dbConnection = require('./config/db');
const passport = require('./passport');
const authRoute = require('./routes/auth');
const gameRoute = require('./routes/game');
const app = express();
const PORT = process.env.PORT || 8000;

// ===== Middleware ====
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(morgan('dev'));

//app.use(cookieParser());

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: MongoStore.create({
			client: dbConnection
		}),
		resave: false,
		saveUninitialized: false
	})
);

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	});
};

/* Express app ROUTING */
app.use('/auth', authRoute);
app.use('/game', gameRoute);

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});



/* require("dotenv").config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require("express-session");
//const passport = require("passport");
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
//const passportStrategy = require('./config/passport');

// App variables
const app = express();

// Connect to mongoDB
connectDB();

app.use(expressSession({
  secret: 'theSecret',
  saveUninitialized: false,
  resave: false,
  cookie: {
      maxAge: 60000 * 60 * 24
  }
}))

//app.use(passport.initialize());
//app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
)

app.use("/auth", authRoute)

port = process.env.port || 8000

app.listen(port, () => console.log(`Server running on port ${port}`));

*/