#!/usr/bin/env node

const lib = require('../lib/parser.js');

const coordinates = process.argv.slice(2);
const latitude = coordinates[0];
const longitude = coordinates[1];

lib.get(latitude, longitude);
