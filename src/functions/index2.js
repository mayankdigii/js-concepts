// Concept 2 - Ways to export 

export default function DoSomething3() {
    const x = 30;
    console.log('Exported Normal Function', x);
}

const DoSomething4 = () => {
    const x = 40;
    console.log('Exported Arrow Function', x)
}

// This line will give error since a module cannot have multiple default exports 
// export default DoSomething4;


export { DoSomething4 };