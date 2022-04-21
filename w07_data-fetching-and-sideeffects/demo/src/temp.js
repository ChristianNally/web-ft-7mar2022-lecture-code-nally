
let x = 5;




function doubler(num) {

  const returnVal = num * 2 + x;
  x = x + 1;

  // pushing data to an API
  console.log('monkeyfuzz');

  return returnVal;
}

doubler(44);
doubler(45);
