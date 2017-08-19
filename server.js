const express = require('express');
const morgan = require('morgan');
const path = require('path');
const crypto = require('crypto');
/*var Pool = require('pg').Pool;

var config = {
  user : 'omkar3654',
  database : 'omkar3654',
  host : 'db.imad.hasura-app.io',
  port : '5432',
  password : process.env.DB_PASSWORD
};*/
var app = express();
app.use(morgan('combined'));

//********************************************************
//                      REQUESTS AND SENDS
//********************************************************
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/hash/:input', function(req, res) {
    var hashString = hash(req.params.input, 'HELLO.ME');
    res.send(hashString);
});

/*var pool = new pool(config);
app.get('/test-db', function (req, result) {
  pool.querry('select * from test',function(err, results){
      if(err){
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      }
  });
});*/
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
//***********************************************************
//       FUNCTIONS
//***********************************************************
function hash (input, salt) {
 var hashed = crypto.pbkdf2Sync(input, salt, 1, 512, 'sha512');
 return hashed.toString('hex');
}




