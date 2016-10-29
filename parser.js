var https = require("https");

function printInfo(lat, long, celsius){
  var message = "Está fazendo " + celsius + " graus na localizacao " + lat + " " + long;
  console.log(message);
}

function get(lat,long){


   var request = https.get("https://darksky.net/" + lat + "," + long + ".json", function(response){

    var body = "";

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end',function(){

      if(response.statusCode === 200) {
        try{
          var weatherJSON = JSON.parse(body);
          printInfo(lat, long, weatherJSON.currently.temperature);
        }catch(error){
          //Parsing error
          console.error(error.message);
        }
      }
    });

    //connection error
    response.on('error', function(error){
      console.error(error.message);
    });

  });
}

module.exports.get = get;
