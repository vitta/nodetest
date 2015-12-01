//exports
//global
//
var db = require("../db");
db.connect();

function User(name){
    this.name = name;

}

User.prototype.hello = function(who){

    console.log(db.getPhrase("Hello") + ", " + who.name);
};
//console.log("user is required");
//console.log(module);
module.exports = User;

