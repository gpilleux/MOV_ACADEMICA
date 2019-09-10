const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Activity = require('../../models/Activity');
const Visitor = require('../../models/Visitor');
const Visit = require('../../models/Visit');

// @route   POST api/visitor/
// @desc    Create or update a Visitor
// @access  Private
router.post('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    gender,
    born_date,
    contact,
    nacionality,
    date_created,
    last_modified
  } = req.body;

  // Build Visitor object
  const visitorFields = {};
  if (name) visitorFields.name = name;
  if (gender) visitorFields.gender = gender;
  if (born_date) visitorFields.born_date = born_date;
  if (contact) visitorFields.contact = contact;
  if (nacionality) visitorFields.nacionality = nacionality;
  if (date_created) visitorFields.date_created = date_created;
  if (last_modified) visitorFields.last_modified = last_modified;

  try {
    let visitor = await Visitor.findOne({ _id: req.id });
    if (visitor) {
      // Update
      visitor = await Visitor.findOneAndUpdate(
        { _id: req.id },
        { $set: visitorFields },
        { new: true }
      );

      return res.json(visitor);
    }

    // Create
    visitor = new Visitor(visitorFields);

    await visitor.save();

    return res.json(visitor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visitor/
// @desc    Get all Visitors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visitor/:visitor_id
// @desc    Get Visitor by ID
// @access  Public
router.get('/:visitor_id', async (req, res) => {
  try {
    const visitor = await Visitor.findOne({
      _id: req.params.visitor_id
    }); //.populate('user', ['name', 'avatar'])
    if (!visitor) {
      return res.status(400).json({ msg: 'Visitor not found' });
    }
    res.json(visitor);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Visitor not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/visitor/:visitor_id
// @desc    Update Visitor
// @access  Private
router.post('/:visitor_id', async (req, res) => {
  const {
    name,
    gender,
    born_date,
    contact,
    nacionality,
    date_created,
    last_modified
  } = req.body;

  // Build Visitor object
  const visitorFields = {};
  if (name) visitorFields.name = name;
  if (gender) visitorFields.gender = gender;
  if (born_date) visitorFields.born_date = born_date;
  if (contact) visitorFields.contact = contact;
  if (nacionality) visitorFields.nacionality = nacionality;

  try {
    let visitor = await Visitor.findOne({ _id: req.params.visitor_id });

    if (visitor) {
      // Update
      visitor = await Visitor.findOneAndUpdate(
        { _id: req.params.visitor_id },
        { $set: visitorFields },
        { new: true }
      );

      //await visitor.save();

      return res.json(visitor);
    } else {
      return res.json({ error: 'Visitante inexistente' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visitor/:activity_id
// @desc    Get all Visitors from Activity_id
// @access  Public
router.get('/fromActivity/:activity_id', async (req, res) => {
  try {
    const visit = await Visit.find({
      activity: req.params.activity_id
    }).populate('visitor', ['name']);
    //console.log(visit);

    //let visitors = await Visitor.find({ _id: visit.map(v => v.visitor) });

    res.json(visit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/visitor/:activity_id
// @desc    Get all Visits from Activity_id
// @access  Public
router.get('/visits/:activity_id', async (req, res) => {
  try {
    const visits = await Visit.find({ activity: req.params.activity_id });

    res.json(visits);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/visitor/:visitor_id
// @desc    Delete Visitor by ID
// @access  Private
router.delete('/:visitor_id', async (req, res) => {
  try {
    // Delete Visitor
    await Visitor.findOneAndRemove({ _id: req.params.visitor_id });

    res.json({ msg: 'Visitante Eliminado' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
