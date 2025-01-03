/**
 *  ## Problem Statement :-
 *   
 *  In React, we need to transform a list of names (e.g., convert them to uppercase) without using a
 *  traditional for loop. The solution should efficiently handle the transformation in a declarative and
 *  React-friendly manner, ensuring good performance even with large data sets.
 * 
 */

const names = ['Pedro', 'Jessica', 'Carol', 'Pedro', 'Pedro222']

/**
 *  ## Solution : use Map Method
 */


// syntax example and also you can see the anonymous function
names?.map(() => {

})


// example - mapping over the elements
const mappedNames = names?.map((name) => {
    return name + 1
})
console.log('mappedNames', mappedNames);

// react example - Mapping over elements and converting the array items to h1 tags , comment to run code
names?.map((name, index) => {
    return <h1 key={index}>{name}</h1>
})


// Solution 
const mappedNames1 = names?.map((name) => {
    return name?.toUpperCase();
})
console.log('mappedNames1',mappedNames1)