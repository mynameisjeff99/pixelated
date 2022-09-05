require('dotenv').config();

const mongoose = require('mongoose');

const mongoDbUrl = process.env.MONGODB_URL;

async function dbConnection() {
  try {
    await mongoose.connect(mongoDbUrl);
  } catch (err) {
    console.log(err)
  }
  return mongoose.connection.getClient();
}

const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err)
});

module.exports = dbConnection();
