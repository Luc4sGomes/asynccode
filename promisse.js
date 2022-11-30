console.log("pedi uber");
const promise = new Promise((resolve, reject) => {
  let keepValue = false;

  if (keepValue) {
    return resolve("pedido aceito");
  } else {
    return reject("pedido negado");
  }
});

console.log("aguardando...");

promise.then(result => console.log(result)) //Fullfield
.catch(error => console.log(error)) //Rejected
.finally(() => console.log('finalizada')); //Finally
