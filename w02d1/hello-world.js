//
// OUR GOAL: to establish some test code 'along side but independent from' our main code.
//

// STEP 1) implement a function called sayHello that takes the name of 
// the saluted person and returns what would be said.

const sayHello = (name) => {
  return `Hello, ${name}!`;
};

const sayGoodbye = (name) => {
  sayHello(name);
  return `Goodbye, ${name}!`;
};

module.exports = { 
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};

