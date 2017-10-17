'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var model = function model(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING,
      default: null
    },
    message: {
      type: DataTypes.STRING
    }
  });

  Contact.associate = function (models) {};

  return Contact;
};

exports.default = model;