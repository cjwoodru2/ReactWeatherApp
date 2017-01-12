var express 	= require("express");
	app 		= express();

app.use(express.static("public"));


app.listen(3000, function() {
	console.log("Express server is running on PORT 3000");
})