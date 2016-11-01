module.exports.get = get;

/**
* Get weather information.
*
* @param lat Latitude
* @param long Longitude
*/

function get(lat, long) {
  const https = require('https');

  https.get(`https://darksky.net/${lat},${long}.json`, showWeaterInformation);

  function showWeaterInformation(response){
    let body = '';

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end',function(){
      if (response.statusCode === 200) {
        try {
          const weatherJSON = JSON.parse(body);
          printInfo(lat, long, weatherJSON.currently.temperature);
        } catch (error){
          //Parsing error
          console.error(error.message);
        }
      }
    });

    //connection error
    response.on('error', function(error){
      console.error(error.message);
    });
  }
}

function printInfo(lat, long, celsius){
  let message = `Está fazendo ${celsius} graus na localizacao ${lat} ${long}`;
  console.log(message);
}
