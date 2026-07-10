const express = require('express');
const connectDB = require('./db/db')
const notemodel = require('./model/note.model')


connectDB()
const app = express();








module.exports = app