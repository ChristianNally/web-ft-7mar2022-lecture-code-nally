let age = 50;

// // console.log('age',age);
// // console.log('typeof age',typeof age);


// function sayHello(toWhom) {
//   const returnValue = `Hello, ${toWhom}`;
//   console.log(returnValue);
//   return returnValue;
// };

const ditAllo = function(aQui){
  console.log(`Allo a ${aQui}`);
};

// // sayHello('World');

// // myFunc('Sam');
// // console.log('typeof myFunc',typeof myFunc);


function doActionNumTimes(num, action){
  for (let ii = 0; ii < num; ii++){
    action(ii);
  }
}


// const numTimes = 5;
// doActionNumTimes(numTimes, sayHello );


// doActionNumTimes(4, function(){
//   console.log('MonkeyFuzz');
// });

doActionNumTimes(4, () => console.log('MonkeyFuzz') );
doActionNumTimes(4, ditAllo );

// const runMe = function(age){
//   // do stuff
//   return 1;
// }
// runMe();

// const executeMe = age => '';


// const sales = [432,667,123,999,23,43];


// function ourMap(array, transformationCallback){
//   const output = [];

//   for (let element of array){
//     console.log('element',element);
//     output.push( transformationCallback(element) );
//   }

//   return output;
// }


// console.log('xform 1', ourMap(sales, item => item * 2 ) );
// console.log('xform 2', ourMap(sales, item => item * 3 ) );
// console.log('xform 4', ourMap(sales, arrayElement => arrayElement + 10 ) );



// console.log('xform 3', ourMap(sales, function(x){return x + 5;} ) );
