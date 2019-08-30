const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  born_date: {
    type: Date,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  nacionality: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  last_modified: {
    type: Date,
    default: Date.now
  }
});

module.exports = Visitor = mongoose.model('visitor', VisitorSchema);
