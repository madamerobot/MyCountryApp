//This module should have a function that takes in a filename and a callback function as a parameter.
//It should then read that file, then parse the JSON. 
//Finally, it should call the callback function and pass the parsed JSON to it.

//One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
//Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

//Requiring file system library
var fs = require('fs');

//Declaring global variable objectarray, so that it can be used everywhere else
var objectarray = [ ];

//reader function is a wrapper for readFile, which takes any filename plus any function as parameters
//STEP 01: File is being read and parsed from text-string into array of JS object
//STEP 02: Then array gets assigned to variable 'objectarray'
//STEP 03: Then callback function is being called, passing on objectarray as argument

var reader = function (filename, callback){

	fs.readFile(filename, 'utf-8', function(err, data){
		if (err){
			throw err;
		} else {
			objectarray = JSON.parse(data);
			callback(objectarray);
		}
	}); //End of fs.readFile
}

//Exporting reader function, so that it can be used in node.js file
exports.reader = reader;
	