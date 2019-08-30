const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  activity_type: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'Programada'
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

module.exports = Activity = mongoose.model('activity', ActivitySchema);
