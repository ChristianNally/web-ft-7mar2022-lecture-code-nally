//const assert = require('assert');
const assert = require('chai').assert;

const helperFuncs = require('../hello-world');

// test the code

describe('say group of tests', () => {

  it('should produce a valid way of saying goodbye', () => {
    const returnValue = helperFuncs.sayGoodbye('my little friend');
    assert.equal(returnValue, 'Goodbye, my little friend!');
  });

  it('produces the expected sayHello output', () => {
    const returnValue = helperFuncs.sayHello('my little friend');
    assert.equal(returnValue, 'Hello, my little friend!');
  });
  
  it('produces a different set of expected output', () => {
    const returnValue2 = helperFuncs.sayHello('my little friend');
    assert.equal(returnValue2, 'Hello, my little friend!');
  });

});
