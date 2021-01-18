
const mongoose = require('mongoose')


var mongoDB =  "mongodb://127.0.0.1:27017/local"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db2 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db 