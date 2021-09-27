const { fetchBreedDescription } = require("./breedFetcher");


const query = process.argv[2];



fetchBreedDescription(query, (err, desc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(desc);
  }
});