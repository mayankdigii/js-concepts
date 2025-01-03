// Concept : Optional Chaining

const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const name = data?.person?.name;
    return name;
}

fetchData();