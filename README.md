# text-2-ascii

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
# How to use
### To receive the ASCII code as a string:  
const cs2a = require('text-2-ascii');  
cs2a('aab'); // returns: "979798"  

### To receive the ASCII code as a number:  
parseInt(cs2a('aab')); // returns: 979798