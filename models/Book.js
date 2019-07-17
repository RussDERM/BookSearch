const mongoose = require('mongoose');

// Grab the schema constructor method from mongoose
var Schema = mongoose.Schema;

// New Schema Object
var BookSchema = new Schema({
  // the show title will be a string, and a required field
  Title: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  // NOTE FUNCTION FOR LATER?
  // // Note will store associated note id's from the note collection, with reference to the article
  // note: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }
});


// Create the model
var Book = mongoose.model('Book', BookSchema);
// Export the model
module.exports = Book;