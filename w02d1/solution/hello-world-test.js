const helperFunctions = require("./hello-world");
const assert = require('assert');

assert.equal(helperFunctions.sayHello("tony"),"hello tony"); // this will silently pass

assert.equal(helperFunctions.sayHello("tony"),"hello tony!!"); // this will violently fail
