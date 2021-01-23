# learn-fullstack-javascript
Learning Fullstack JavaScript Development: MongoDB, Node.js, React.js


To make this project run you need to add server.js  which should have mongo db password an passport.js secrets


var mongourl =  "mongodb+srv://<username>:<yourpassword>@<yourcluster>.ge3qg.mongodb.net/<yourdb>?retryWrites=true&w=majority"
var secretpswd = "<secret>"
export default {
    url : mongourl ,
    pswd : secretpswd,
}
