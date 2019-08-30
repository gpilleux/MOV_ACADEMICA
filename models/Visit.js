const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'activity'
  },
  visitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'visitor'
  },
  origin_institution: {
    type: String,
    required: true
  },
  patrocinador: {
    type: String,
    required: true
  },
  finance_type: {
    type: String,
    required: true
  },
  visit_rol: {
    type: String,
    required: true
  },
  degree_level: {
    type: String,
    required: true
  },
  expositor: {
    type: Boolean,
    default: false
  },
  attended: {
    type: Boolean,
    default: false
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

module.exports = Visit = mongoose.model('visit', VisitSchema);
