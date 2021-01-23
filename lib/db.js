import secrets from "../secrets";
const mongoose = require('mongoose')



mongoose.connect(secrets.url, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(secrets);

console.log(mongoose.connection);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db 
    