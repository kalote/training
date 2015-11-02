// Vars
var express = require("express"),
	app = express();

// Middleware
app.use(express.static("public"));

app.listen("3000", function(){
	console.log("server listening on port 3000");
});