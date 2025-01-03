// Concept 1 : Destructure 

const person = {
    name: 'Pedro',
    age: 20,
    isMarried: false,
}

// Way 1 of accessing the person properties
const name = person.name 
const age = person.age
const isMarried = person.isMarried


//  Way 2 Destructure 
const { name: personName, age: personAge, isMarried: personMarriedOrNot } = person