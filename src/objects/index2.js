// Way 2 => using the spread Opertor 

const person3 = { ...person, name: 'Billy' }

// Example for destructure 
const { age, name, isEnglishSpeaker: knowsEnglish } = person;


// More Examples 

const names = ['Pedro', 'Jack', 'Jessica'];

// Add a new name to this 
const names2 = [...names, 'Joe'];


console.log('Person2', person2);
console.log('Person3', person3);
console.log('Names2', names2);