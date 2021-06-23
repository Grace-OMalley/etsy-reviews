const database = require('../database/dbIndex.js');
const mongoose = require('mongoose');

// seed data

database.connectDB();
database.populateData();