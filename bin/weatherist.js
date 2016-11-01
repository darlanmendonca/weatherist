#!/usr/bin/env node

var lib = require('../lib/parser.js');

var coordinates = process.argv.slice(2);
var latitude = coordinates[0];
var longitude = coordinates[1];

lib.get(latitude, longitude);
