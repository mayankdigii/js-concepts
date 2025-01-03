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
 *  ## Solution : use Filter Method
 */

names?.filter(() => {
    // condition 
})


//  Way 1
const filteredNames = names?.filter((name) => {
    return name != 'pedro'
})
console.log('Filtered Names', filteredNames)


const filteredNames2 = names?.filter((name) => {
    return !name?.includes('pedro')
})
console.log('Filtered Names 2 ', filteredNames2)