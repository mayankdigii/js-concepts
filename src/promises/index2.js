//  Show this first 
const data = fetch('https://cat-fact.herokuapp.com/facts');

// then run this 
data.then((res) => {
    console.log('Res', res)
}).catch((err) => {
    // for error change the url little bits
    console.log('err', err)
})

console.log(data);