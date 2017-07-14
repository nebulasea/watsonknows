
const express = require(`express`);
const path = require(`path`);
const watson = require('watson-developer-cloud/tone-analyzer/v3');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const mongo = require('mongodb');
const mongoose = require('mongoose');

// Express Port/App Declaration
const PORT = process.env.PORT || 4200;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Firebase Config
const config = {
    apiKey: "AIzaSyA_PNb0-y-MD5-lrnxGctMWqDAzjlc2iH8",
    authDomain: "watson-7888b.firebaseapp.com",
    databaseURL: "https://watson-7888b.firebaseio.com",
    projectId: "watson-7888b",
    storageBucket: "watson-7888b.appspot.com",
    messagingSenderId: "836327892399"
  };
  firebase.initializeApp(config);

  //MongoDB config

// const toneDatabase = require('./database/schema');
const mongoConnection = process.env.MONGODB_URI;
const db = mongoose.connection;
const localMongo = mongoose.createConnection('mongodb://localhost/reactredux', {useMongoClient: true});if (mongoConnection) {
  console.log("connected to heroku");
  mongoose.connect(mongoConnection)
} else {
  console.log("connected locally");
  localMongo
};
db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function () {
  console.log("Mongoose connection successful.");
});


// Routes
app.get(`*`, function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});
app.post('/api/tone', function(req,res){
  console.log(req.body)
  var tone_analyzer =  new watson({
    username: '56d8b15e-1a56-474c-843a-5e6f990ca58d',
    password: 'ICD0LAebSlJG',
    version_date: '2016-05-19',
  });

  tone_analyzer.tone(req.body, function(err, tone) {
    if (err)
      console.log(err);
    else {
      let colors = ['#8884d8','#83a6ed','#8dd1e1', '#82ca9d', '#a4de6c' ];
      let data = tone.document_tone.tone_categories[0].tones;
      let moods = data.map(function(mood, index){
        let score = (mood.score*100.0).toFixed(2);
        return(
          {
           name: `${mood.tone_name}: ${score}%`,
           score: score,
           fill: colors[index]
          }
        )
      })
      res.json(moods);
} 
  });
})
// Connection to PORT
app.listen(PORT, function () {
  console.log(`Listening On Port: ${PORT}`);
});