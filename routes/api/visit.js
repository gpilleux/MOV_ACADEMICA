const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Activity = require('../../models/Activity');
const Visitor = require('../../models/Visitor');
const Visit = require('../../models/Visit');

// @route   POST api/visit/
// @desc    Create a Visit
// @access  Private
router.post('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    activity,
    visitor,
    origin_institution,
    patrocinador,
    finance_type,
    activity_type,
    visit_rol,
    degree_level,
    expositor,
    attended,
    date_created,
    last_modified
  } = req.body;

  // Build Activity object
  const visitFields = {};
  if (activity) visitFields.activity = activity;
  if (visitor) visitFields.visitor = visitor;
  if (origin_institution) visitFields.origin_institution = origin_institution;
  if (patrocinador) visitFields.patrocinador = patrocinador;
  if (finance_type) visitFields.finance_type = finance_type;
  if (activity_type) visitFields.activity_type = activity_type;
  if (visit_rol) visitFields.visit_rol = visit_rol;
  if (degree_level) visitFields.degree_level = degree_level;
  if (expositor) visitFields.expositor = expositor;
  if (attended) visitFields.attended = attended;
  if (date_created) visitFields.date_created = date_created;
  if (last_modified) visitFields.last_modified = last_modified;

  try {
    // Create Visit
    let visit = new Visit(visitFields);

    await visit.save();

    return res.json(visit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visit/
// @desc    Get all Visits
// @access  Public
router.get('/', async (req, res) => {
  try {
    const visitors = await Visit.find();
    res.json(visitors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visit/:visit_id
// @desc    Get Visit by ID
// @access  Public
router.get('/:visit_id', async (req, res) => {
  try {
    const visit = await Visit.findOne({
      _id: req.params.visit_id
    })
      .populate('visitor', ['name'])
      .populate('activity', ['name']);
    if (!visit) {
      return res.status(400).json({ msg: 'Visit not found' });
    }
    res.json(visit);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Visit not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visitor/:visitor_id
// @desc    Get All Visits from visitor_id
// @access  Public
router.get('/visitor/:visitor_id', async (req, res) => {
  try {
    const visits = await Visit.find({
      visitor: req.params.visitor_id
    }).populate('activity', ['name']);

    res.json(visits);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Visit not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/visit/:visitor_id
// @desc    Update Visit
// @access  Private
router.put('/:visit_id', async (req, res) => {
  const {
    activity,
    visitor,
    origin_institution,
    patrocinador,
    finance_type,
    activity_type,
    visit_rol,
    degree_level,
    expositor,
    attended,
    date_created,
    last_modified
  } = req.body;

  // Build Visitor object
  const visitFields = {};
  if (activity) visitFields.activity = activity;
  if (visitor) visitFields.visitor = visitor;
  if (origin_institution) visitFields.origin_institution = origin_institution;
  if (patrocinador) visitFields.patrocinador = patrocinador;
  if (activity_type) visitFields.activity_type = activity_type;
  if (visit_rol) visitFields.visit_rol = visit_rol;
  if (degree_level) visitFields.degree_level = degree_level;
  if (expositor) visitFields.expositor = expositor;
  if (finance_type) visitFields.finance_type = finance_type;
  if (attended) visitFields.attended = attended;

  try {
    let visit = await Visit.findOne({ _id: req.params.visit_id });

    if (visit) {
      // Update
      visit = await Visit.findOneAndUpdate(
        { _id: req.params.visit_id },
        { $set: visitFields },
        { new: true }
      );

      //await visit.save();

      return res.json(visit);
    } else {
      return res.json({ error: 'Visita inexistente' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/visit/:visit_id
// @desc    Delete Visit by ID
// @access  Private
router.delete('/:visit_id', async (req, res) => {
  try {
    // Delete Visit
    await Visit.findOneAndRemove({ _id: req.params.visit_id });

    res.json({ msg: 'Visita Eliminada' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
