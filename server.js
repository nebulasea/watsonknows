
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
const mongoConnection = process.env.MONGODB_URI;
const db = mongoose.connection;

var connection;
if (process.env.MONGODB_URI){
    // this executes if this is being executed in heroku app
    connection = mongoose.createConnection(MONGODB_URI);
} else {
   /// this executes if this is being executed on local machine
    connection = mongoose.createConnection('mongodb://localhost:27017/reactredux');
}

// var connection = mongoose.createConnection('mongodb://localhost:27017/reactredux');
// console.log("Connection Successful");

const Schema = mongoose.Schema;
var schema = new mongoose.Schema({moods:'string', text:'string'});
var Mood = connection.model('Mood', schema);


function saveToDB(res, currentMoods, moodObject){
  console.log("made it here");
  Mood.create(moodObject, function (err, mood) {
    if (err) throw(err);
    console.log('mood saved');
    getTotal(res, currentMoods)
  })
}


function getTotal(res, currentMood){
     var counts = { 
    "Anger": 0,
    "Joy": 0,
    "Sadness": 0,
    "Fear": 0,
    "Disgust": 0
    };
    Mood.find({}, function(err,data){
      if (err) throw err;

      data.forEach(function(row){
        console.log(row);
        JSON.parse(row.moods).forEach(function(eachMood){
          console.log(eachMood);
          switch (eachMood.mood){
          case "Anger":
          console.log('made it to anger')
            counts["Anger"] = counts["Anger"] + parseFloat(eachMood.score);
            break;
          case "Disgust":
            counts["Disgust"] = counts["Disgust"] + parseFloat(eachMood.score);
            break;
          case "Sadness":
            counts["Sadness"] = counts["Sadness"] + parseFloat(eachMood.score);
            break;
          case "Joy":
            counts["Joy"] = counts["Joy"] + parseFloat(eachMood.score);
            break;
          case "Fear":
            counts["Fear"] = counts["Fear"] + parseFloat(eachMood.score);
            break;
          
          }
        })
      })
      console.log(counts);

      var totalMood = [];
      let colors = ['#8884d8','#83a6ed','#8dd1e1', '#82ca9d', '#a4de6c' ];
      let emotions = Object.keys(counts);
      for(i=0; i<5; i++){
          let name = emotions[i];
          let score = counts[name].toFixed(2);
          console.log('counts', counts[name]);
        totalMood.push({
            name: `${name}: ${score}%`,
          score: score,
          fill: colors[i]
        })
      }
    res.json({totalMood: totalMood, currentMood: currentMood});
    })
}


app.get('/api/tone', function(req, res){

  getTotal(res);

})


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

        let scoreObj = {
            mood: mood.tone_name,
            name: `${mood.tone_name}: ${score}%`,
            score: score,
            fill: colors[index]
            }
        return scoreObj
      })

      saveToDB(
        res, 
        moods,
        Object.assign({moods:JSON.stringify(moods)}, {text:JSON.stringify(req.body)})
      )
      // res.json(moods);
} 
  });
});

// Connection to PORT
app.listen(PORT, function () {
  console.log(`Listening On Port: ${PORT}`);
});