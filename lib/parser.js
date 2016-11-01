module.exports.get = get;

/**
* Get weather information.
*
* @param lat Latitude
* @param long Longitude
*/

function get(lat, long) {
  const request = require('request-promise');
  const url = `https://darksky.net/${lat},${long}.json`;
  const resolveWithFullResponse = true;

  request({url, resolveWithFullResponse})
    .then(showWeaterInformation)
    .catch(responseError);

  function showWeaterInformation(response){
    if (response.statusCode === 200) {
      try {
        const weatherJSON = JSON.parse(response.body);
        printInfo(lat, long, weatherJSON.currently.temperature);
      } catch (error){
        //Parsing error
        console.error(error.message);
      }
    }
  }

  function responseError(error){
    console.error(error.message);
  }
}

function printInfo(lat, long, celsius){
  let message = `Está fazendo ${celsius} graus na localizacao ${lat} ${long}`;
  console.log(message);
}
