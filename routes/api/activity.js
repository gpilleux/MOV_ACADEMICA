const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Activity = require('../../models/Activity');
const Visitor = require('../../models/Visitor');
const Visit = require('../../models/Visit');

// @route   POST api/activity/
// @desc    Create or update an Activity
// @access  Private
router.post('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    date_start,
    date_end,
    description,
    unit,
    activity_type,
    state,
    date_created,
    last_modified
  } = req.body;

  // Build Activity object
  const activityFields = {};
  if (name) activityFields.name = name;
  if (date_start) activityFields.date_start = date_start;
  if (date_end) activityFields.date_end = date_end;
  if (description) activityFields.description = description;
  if (unit) activityFields.unit = unit;
  if (activity_type) activityFields.activity_type = activity_type;
  if (state) activityFields.state = state;
  if (date_created) activityFields.date_created = date_created;
  if (last_modified) activityFields.last_modified = last_modified;

  try {
    let activity = await Activity.findOne({ _id: req.id });
    if (activity) {
      // Update
      activity = await Activity.findOneAndUpdate(
        { _id: req.user.id },
        { $set: activityFields },
        { new: true }
      );

      return res.json(activity);
    }

    // Create
    activity = new Activity(activityFields);

    await activity.save();

    return res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/activity/
// @desc    Get all activities
// @access  Public
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/activity/:activity_id
// @desc    Get Activity by ID
// @access  Public
router.get('/:activity_id', async (req, res) => {
  try {
    const activity = await Activity.findOne({
      _id: req.params.activity_id
    }); //.populate('user', ['name', 'avatar'])
    if (!activity) {
      return res.status(400).json({ msg: 'Activity not found' });
    }
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Activity not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/activity/:activity_id
// @desc    Delete Activity by ID
// @access  Private
router.delete('/:activity_id', async (req, res) => {
  try {
    // Delete Activity
    await Activity.findOneAndRemove({ _id: req.params.activity_id });

    res.json({ msg: 'Actividad Eliminada' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/activity/visitors/:activity_id
// @desc    Get all Visitors from a specific Activity
// @access  Public
router.get('/visitors/:activity_id', async (req, res) => {
  try {
    const visits = await Visit.find({
      activity: req.params.activity_id
    })
      .populate('visitor', ['name', 'nationality', 'contact'])
      .populate('activity', ['name', 'description']);

    res.json(visits);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
