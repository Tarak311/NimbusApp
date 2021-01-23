const env = process.env;

var mongourl = process.env.ALTURL ||  "mongodb+srv://usera:userb@littlemongocluster.ge3qg.mongodb.net/nimbusapp?retryWrites=true&w=majority"
var secretpswd = process.env.PAWD ||"notsoobivios"
export default {
    url : mongourl ,
    pswd : secretpswd,
}
