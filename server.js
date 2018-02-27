var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// require("./app/data/friends");


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  