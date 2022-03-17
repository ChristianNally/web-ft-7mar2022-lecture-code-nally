console.log('this is the beginning of the main thread');

const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);


// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise, 6 seconds later:',promise);
// },500);



//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('third');
    // const newData = 'another thing';
    // console.log("newData:",newData);
    console.log('data:', data);
  });
  
  // // <--- that is just a function call. no magic there!
  // .then(() => {
  //   console.log('it is alive!');
  // });

  console.log('this is the end of the main thread');