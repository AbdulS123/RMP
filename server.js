const express = require('express');
const session = require('express-session')
const path = require('path');
const bodyParser = require('body-parser');
const profsValues = require('./public/profData.js');
const sessionStore = new session.MemoryStore();

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', express.static(path.join(__dirname, 'login')));
app.use('/api/info', express.static(path.join(__dirname, 'public')));


// Configure a 'get' endpoint for all profs
app.get('/profs', function (req, res) {
  const profs = Object.values(profsValues);
  res.json(profs);
})

app.use(session({
  secret: 'legit signt the cookie id 4 real',
  cookie: {maxAge: 30000},
  saveUninitialized: false,
  store: sessionStore
}));


const testUsername = 'a'
const testPassword = 'a'

// POST route for handling login
app.post('/login/login', (req, res) => {
  const { username, password } = req.body;
  if(username && password){
    if(req.session.authenticated){
      res.redirect('/profs'); 
    }
  else{
    if(password === testPassword && username === testUsername){
      req.session.authenticated = true;
      req.session.user = {
        username, password
      };
      res.json({ success: true, redirectUrl: '/profs' });
      console.log(req.sessionID)
    }else{
      res.status(401).json({ message: 'Invalid username or password' });
    }
  }
  }else{
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

