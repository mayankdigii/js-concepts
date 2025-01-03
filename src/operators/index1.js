// spread vs rest operator 

const aboutWork = ["help", "students"];
const aboutUs = ["GeeksforGeeks", ...aboutWork, "grow."];

console.log(aboutUs);


function rest(...theArgs) { // it combines all the input in an array
    console.log(theArgs.length);
}

rest(); // 0
rest(5); // 1
rest(5, 6, 7); // 3