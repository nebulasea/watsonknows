
var express = require(`express`);
var path = require(`path`);
var watson = require('watson-developer-cloud/tone-analyzer/v3');
var bodyParser = require('body-parser');
// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Routes
app.get(`*`, function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});
app.post('/api/tone', function(req,res){
  console.log(req.body)
  var tone_analyzer =  new watson({
    username: '56d8b15e-1a56-474c-843a-5e6f990ca58d',
    password: 'ICD0LAebSlJG',
    version_date: '2016-05-19'
  })

  tone_analyzer.tone(req.body, function(err, tone) {
    if (err)
      console.log(err);
    else {
      res.json(tone);
    }  
  });
    
})
// Connection to PORT
app.listen(PORT, function () {
  console.log(`Listening On Port: ${PORT}`);
});