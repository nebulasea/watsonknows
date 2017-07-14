const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var schema = new mongoose.Schema({ name: 'string', score: 'string', text:'string', fill:'string' });
var Mood = mongoose.model('Mood', schema);

module.exports = Mood;






