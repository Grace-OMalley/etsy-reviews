const database = require('../database/dbIndex.js');
const mongoose = require('mongoose');

database.connectDB();
database.populateData();