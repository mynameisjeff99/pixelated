const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const user = require('./routes/api/user');

const app = express();

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/user', user);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
