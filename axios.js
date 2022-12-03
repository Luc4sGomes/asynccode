import axios from "axios";
axios.get('https://jsonpeholder.typicode.com/users')
.then((response) => {
  console.log(response.data);
})
.catch((erro) => {console.log("vu")})