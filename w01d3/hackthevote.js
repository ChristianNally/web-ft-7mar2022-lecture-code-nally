
// let voterOneName = 'Ada Lovelace';
// const voterOneDidVote = true; // boolean
// const voterOneAge = 36;

// const voterTwoName = `Hamilton, Margaret`;
// let voterTwoDidVote = false;
// const voterTwoDateOfBirth = '1936 - 08 - 17';

// const voterThreeName = "Emmy Noether";
// let voterThreeDidVote;
// const voterThreeDateOfBirth = null;

// const numberOfVoters = 4123987;
// const numberOfActualVotes = NaN;
// const numberOfVotes = 9007199254740991n;

// const sym = Symbol('anonymousWasHere');


// //
// // types
// //

// console.log(`typeof voterOneName\t${voterOneName}`, typeof voterOneName);
// console.log(`typeof voterOneDidVote\t${voterOneDidVote}`, typeof voterOneDidVote);
// console.log(`typeof voterOneAge\t${voterOneAge}`, typeof voterOneAge);
// console.log(`typeof voterTwoName\t${voterTwoName}`, typeof voterTwoName);
// console.log(`typeof voterTwoDidVote\t${voterTwoDidVote}`, typeof voterTwoDidVote);
// console.log(`typeof voterTwoDateOfBirth\t${voterTwoDateOfBirth}`, typeof voterTwoDateOfBirth);
// console.log(`typeof voterThreeName\t${voterThreeName}`, typeof voterThreeName);
// console.log(`typeof voterThreeDidVote\t${voterThreeDidVote}`, typeof voterThreeDidVote);
// console.log(`typeof voterThreeDateOfBirth\t${voterThreeDateOfBirth}`, typeof voterThreeDateOfBirth);
// console.log(`typeof numberOfVoters\t${numberOfVoters}`, typeof numberOfVoters);
// console.log(`typeof numberOfActualVotes\t${numberOfActualVotes}`, typeof numberOfActualVotes);
// console.log(`typeof numberOfActualVotes\t${numberOfVotes}`, typeof numberOfVotes);
// console.log(`typeof sym\t`, typeof sym);
// console.log(`sym\t`, sym);

// //
// // Task: Print out all the voters names
// //       and send the list to Vladimir
// //

// console.log('voterOneName', voterOneName);
// console.log('voterTwoName', voterTwoName);
// console.log('voterThreeName', voterThreeName);


//
// Now again with Objects
//

const listOfVoters = [];

listOfVoters[0] = { // this is an object
  lastName: 'Lovelace',
  firstName: 'Ada',
  dateOfBirth: '',
  didVote: false,
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }
}; 

listOfVoters[1] = { // this is an object
  lastName: 'Hamilton',
  firstName: 'Margaret',
  dateOfBirth: '1936 - 08 - 17',
  didVote: false,
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }
}; 

let functionValuedVariable = function name(parameter){ console.log('do stuff') };

listOfVoters[2] = { // this is an object
  lastName: 'Noether',
  firstName: 'Emmy',
  dateOfBirth: '',
  didVote: false,
  fullName: function(){
    return `${this.firstName} ${this.lastName} !`;
  },
  anotherFunction: functionValuedVariable()
}; 

console.log('this',this);

// console.log(`${voterOne.lastName}, ${voterOne.firstName}`);
// console.log(`${voterTwo.lastName}, ${voterTwo.firstName}`);
// console.log(`${voterThree.lastName}, ${voterThree.firstName}`);

// const propertyName = 'lastName';
// console.log('monkeyfuzz1', listOfVoters[2].lastName ); // dot notation
// console.log('monkeyfuzz2', listOfVoters[2]['lastName'] ); // square bracket notation
// console.log('monkeyfuzz3', listOfVoters[2][propertyName] ); // square bracket notation

for (let ii = 0; ii < listOfVoters.length; ii++){
  console.log(`voter[${ii}]`, listOfVoters[ii].fullName() );
}


for (let property in listOfVoters[2]){
  console.log('key name is:',property);
  console.log('value is:',  listOfVoters[2][property]  );
}


// Pass By Value

let widget = 'sailboat';

function appender(thing){
  thing = thing + '44';
  console.log('monkeyfuzz', thing);
}

console.log('widget before', widget);
appender(widget);
console.log('widget after', widget);


// // Pass By Reference

const widget2 = {
  property: 'trimaran'
};

function modifier(object){
  object.property = 'kayak';
  console.log('monkeyfuzz of an object', object);
}

console.log('widget2 before', widget2);
modifier(widget2);
console.log('widget2 after', widget2);
