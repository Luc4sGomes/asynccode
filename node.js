const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/posts/1';
https.get(API, response => { //Will be keep until be call
  console.log(response.statusCode);
});

console.log('connecting API...'); //Will be Executed Firts