const request = require('request');






const breedFecher = function(query) {
  // use request to fetch IP address from JSON API
  
  let domain = ` https://api.thecatapi.com/v1/breeds/search?q=${query}`;

  //console.log(query)
  request(domain, (error, response, body) => {

    if (error) return  'erro';//callback(`\n ERROR: ${error.message}`, null, null);

    if (response.statusCode !== 200) {
      const errMsg = console.log(`Error: ${response && response.statusCode} while fetching URL: ${domain}`);
      return errMsg;
    }

    
    
    let data = JSON.parse(body);

    
    //console.log(data)
    console.log('\nquery:', query);
    console.log('-------------------');
    if (data.length === 0) return console.log('Error: breed not found');
    console.log(data[0].description);
   
  });

};

let query = process.argv.slice(2);

breedFecher(`${query}`);