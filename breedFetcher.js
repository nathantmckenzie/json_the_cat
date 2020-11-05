let request = require('request');

let arg = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    const page = data[0];

    if (page !== undefined) {
      if (!error) {
        if (response.statusCode === 200) {
          const description = data[0].description;
          console.log(description);
        } else {
          console.log('Error ' + response.statusCode);
        }
      }
    } else {
      console.log('Breed not found');
    }
  } else {
    console.log(error);
  }
});
