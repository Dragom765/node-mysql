var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Dragom765"
});

con.connect( function(){
	if(err)
		throw(err);
	else
		console.log("Whoa. You did it.");
}


con.end(function(err){
	
	
});