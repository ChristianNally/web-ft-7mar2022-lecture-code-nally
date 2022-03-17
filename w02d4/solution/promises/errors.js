const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

function processThings(){

  return returnPromise('one',1000)
  .then((data) => {
    console.log('data from one',data);
    returnPromise('two',1000);
    return 2;
  })
  .then((data) => {
    console.log('data from two', data);
    return returnPromise('three',1000);
  })
  .then((data) => {
    console.log('data from three', data);
    return returnRejectedPromise('four',1000);
  })
  .then((data) => {
    console.log('data from four', data);
    return returnPromise('five',1000);
  })
  .then((data) => {
    console.log('data from five', data);
    return returnPromise('six',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('final catch. err:',err);
  });

}


processThings();
