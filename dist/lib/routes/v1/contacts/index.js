'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _database = require('../../../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var Contact = _database2.default.Contact;


router.route('/').post(function (req, res) {
  var _req$body = req.body,
      first_name = _req$body.first_name,
      last_name = _req$body.last_name,
      email = _req$body.email,
      company = _req$body.company,
      message = _req$body.message;


  if (!first_name || !last_name || !email || !message) return res.json({ error: 1, message: 'Please fill out all required fields' });

  Contact.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    company: company,
    message: message
  }).then(function (contact) {
    res.json({});
  }).catch(function (err) {
    res.json({ error: 1, message: 'An error has occured within the database, please try again later or contact support' });
  });
});

exports.default = router;