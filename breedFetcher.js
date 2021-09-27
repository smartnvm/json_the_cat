const request = require('request');






const fetchBreedDescription = function (query, callback) {
  // use request to fetch IP address from JSON API

  let domain = ` https://api.thecatapi.com/v1/breeds/search?q=${query}`;

  //console.log(query)
  request(domain, (error, response, body) => {

    if (error) return callback(`\n ERROR: ${error.message}`, null);

    if (response.statusCode !== 200) {
      const errMsg = console.log(`Error: ${response && response.statusCode} while fetching URL: ${domain}`);
      return callback(errMsg, null);
    }



    let data = JSON.parse(body);


    //console.log(data)
    console.log('\nquery:', query);
    console.log('-------------------');
    let err = 'Error: breed not found'

    if (data.length === 0) return callback(err, null)
    
    return callback(null, data[0].description);

  });

};



module.exports = { fetchBreedDescription };

