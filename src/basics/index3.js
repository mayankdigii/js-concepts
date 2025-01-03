// Two ways to export in JavaScript modules: default export and named export.

// Default Export 
const DoSomething4 = () => {
    const x = 40;
    console.log('Exported Arrow Function', x)
}

// Named Export
export const DoSomething = () => {
    const x = 40;
    console.log('Exported Arrow Function', x)
}


export default DoSomething4;
