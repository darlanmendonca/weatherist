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
      const weatherJSON = JSON.parse(response.body);
      console.log(`Está fazendo ${weatherJSON.currently.temperature} graus na localizacao ${lat} ${long}`);
    } else {
      throw new Error('request error');
    }
  }

  function responseError(error){
    console.error(error.message);
  }
}
