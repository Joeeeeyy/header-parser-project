// server.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// my solution
let whoObj = {};
app.enable('trust proxy');

app.get('/api/whoami', (req, res) => {
  whoObj['ipaddress'] = req.ip
  whoObj['language'] = req.get('Accept-Language')
  whoObj['software'] = req.get('User-Agent')

  res.json(whoObj);
});