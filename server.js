// Stack Requirements
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const logger = require('morgan');
// const Data = require('./data');
const path = require('path');

// Portage
const PORT = process.env.PORT || 3001;

// Require our db models
var db = require('./models');

db.Book.create({
  Title: '1984',
  Author: 'George Orwell',
})

// Middleware Business
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongo Config
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Book';
// Connect to Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Middleware 
// Moran is used for logging server requests in the console
app.use(logger("dev"));
// Parse Request into JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Direct express to our static files
app.use(express.static("public"));

// Start'er up!
app.listen(PORT, function () {
  console.log('App running on port ' + PORT + "!");
})
