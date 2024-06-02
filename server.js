const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const profsValues = require('./public/profData.js');


const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configure a 'get' endpoint for all profs
app.get('/profs', function (req, res) {
  const profs = Object.values(profsValues);
  res.json(profs);})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

