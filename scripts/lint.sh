#!/bin/bash

set -e

# echo $*
# exit

./node_modules/eslint/bin/eslint.js lib/parser.js bin/weatherist.js;

