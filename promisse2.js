import axios from 'axios';

Promise.all([
  axios.get('https://api.github.com/users/Luc4sgomes')
])
.then( responses => {
  console.log(responses[0].data.login);
  console.log(response[1].data.length);
})
.catch(error => console.log(error.message));