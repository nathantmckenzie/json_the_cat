let request = require('request');

let arg = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (!error) { //if there is no error, then the body will be parsed 
    const data = JSON.parse(body);
    const page = data[0];

    if (page !== undefined) { //if the page is not undefinedthere is no error, and the status code is 200, then the description will be printed out.
      if (!error) {
        if (response.statusCode === 200) {
          const description = data[0].description;
          console.log(description);
        } else {
          console.log('Error ' + response.statusCode); //if there is an error, it will be printed with the status code
        }
      }
    } else {
      console.log('Breed not found'); 
    }
  } else {
    console.log(error);
  }
});
