//Requiring file system library
var fs = require('fs');

//Requiring JSON file reader module
var readerfile = require('./json-file-reader');

//						    [0]  	[1]		[2]
//Format terminal command: node node.js "Germany"
//Assiging 3rd value of terminal input to variable consoleInput
var consoleInput = process.argv[2];


//JQUERY

function browserdisplay() {

	$('#country').on('input', function(evenObject){
		var consoleInput = evenObject.target.value;
		var countryinfo = countryinformation("Germany");
		$('#output').text(countryinfo);
	});
}

//Function definition for countryinformation
//Intake of one parameter, which comes from console
var countryinformation = function (consoleInput) {

	//--NOW HANDLED VIA JSON READER MODULE:
	//reader function is being called, argument for filename-parameter is being passed on
	//argument for callback-parameter is being passed on - it's a function
	//

	readerfile.reader('./countries.json', function(x) {

		console.log("Callback is starting now");

		for (var i = 0; i < x.length; i++){
			if (x[i].name === consoleInput){
				console.log("Countryname: "+x[i].name+" "+"TopLD"+" "+x[i].topLevelDomain);
			}
		}
		console.log("Callback has now ended");
	});
	browserdisplay();
}	

	//TESTING FUNCTION BY CALLING IT
	countryinformation("Germany");
	countryinformation("Netherlands");
	countryinformation("Albania");

	//TO DO: ADDING ANY COUNTRY VIA TERMINAL COMMAND e.g. node node.js "Germany"
