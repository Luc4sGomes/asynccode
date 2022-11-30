//functions accept any type data of argument

function showData(data) {
  console.log("another tasks");
  console.log(data());
}
showData(function () {
  //I can pass another function into the function top
  return "Hello World";
});

//example 2

function processUserInput(callback) {
  var name = prompt("Please enter with your name");
  callback(name);
}

function greeting(name) {
  alert("hello " + name);
}

processUserInput(greeting);


//finally, callback bassicly is a function being parameter that another function