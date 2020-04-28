'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json').development;

const db = new Sequelize(config);


module.exports = db;
