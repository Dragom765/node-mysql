var retrieve = function(table, columns, display) {
	var mysql = require("mysql");

	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Dragom765",
		database: table
	});

	con.connect( function(err){
		if(err)
			throw err;
		else
			console.log("You're connected.");
	});

	con.query("SELECT "+columns+" FROM customers", function(err, rows) {
		if(err)
			throw(err)
		else{
			console.log("Look at all the pretty data:\n");
			for(var i = 0; i < rows.length; i++){
				console.log(rows[i][display]);
			}
		}
	});


	con.end(function(err){
	});
};

var table = "book_tutorial";
var columns = "*";
var display = "cust_email";

retrieve(table, columns, display);