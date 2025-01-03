// Concept : var , let , const

var x = 10;
if (true) {
    var x = 20;  // Same variable, re-declared
}
console.log(x);  // 20


let y = 10;
if (true) {
    let y = 20;  // Different variable, scoped to the block
    console.log(y);  // 20
}
console.log(y);  // 10


const z = 10;
if (true) {
    const z = 20;  // Different variable, scoped to the block
    console.log(z);  // 20
}
console.log(z);  // 10
