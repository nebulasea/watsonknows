const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var schema = new mongoose.Schema({ name: 'string', score: 'string', text:'string', fill:'string' });
var Mood = mongoose.model('Mood', schema);

module.exports = Mood;
// const toneSchema = new Schema({
//   tone: 'string',

// var Log = require('./models/log');

// })var chatbot = {
//     sendMessage: function(req, callback) {
//         var userPolicy = req.session.userPolicy;
//         var owner = req.user.local.email;

//         buildContextObject(req, function(err, params) {

//             if (err) {
//                 console.log("Error in building the parameters object: ", err);
//                 return callback(err);
//             }

//             if (params.message) {
//                 var conv = req.body.context.conversation_id;
//                 var context = req.body.context;

//                 var res = {
//                     intents: [],
//                     entities: [],
//                     input: req.body.text,
//                     output: {
//                         text: params.message
//                     },
//                     context: context
//                 };

//                 chatLogs(owner, conv, res);

//                 return callback(null, res);
//             } else if (params) {
//                 // Send message to the conversation service with the current context
//                 conversation.message(params, function(err, data) {

//                     console.log('conversation data');

//                     console.log(data);

//                     if (err) {
//                         console.log("Error in sending message: ", err);
//                         return callback(err);
//                     }
//                     var conv = data.context.conversation_id;

//                     console.log("Got response from Ana: ", JSON.stringify(data));

//                     updateContextObject(data, userPolicy, function(err, res) {

//                         if (data.context.system.dialog_turn_counter > 1) {
//                             chatLogs(owner, conv, res);
//                         }

//                         return callback(null, res);
//                     });
//                 });
//             }

//         });
//     }
// };

// function chatLogs(owner, conversation, response) {

//     console.log("response object is: ", response);

//     // Blank log file to parse down the response object
//     var logFile = {
//         inputText: '',
//         responseText: '',
//         entities: {},
//         intents: {},
//     };


    // var update = {
    //     $set: {
    //         lastContext: response.context,
    //     },
    //     $push: {
    //         logs: logFile
    //     },
    //     $setOnInsert: {
    //         owner: owner,
    //         date: date,
    //         conversation: conversation,
    //     }
    // };
// var options = {
//         safe: true,
//         upsert: true,
//         new: true
//     };

//     var query = {
//         'conversation': conversation
//     };

//     Log.findOneAndUpdate(query, update, options, function(err, doc) {
//         if (err) {
//             console.log("Error with log: ", err);
//         }

//         if (doc) {
//             console.log("Log update success for conversation id of ", conversation);
//         }
//     });
// }