const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));


module.exports = app;
