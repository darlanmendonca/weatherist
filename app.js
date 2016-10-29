var parser = require("./parser.js");

var coordinates = process.argv.slice(2);
var latitude = coordinates[0];
var longitude = coordinates[1];

parser.get(latitude, longitude);
