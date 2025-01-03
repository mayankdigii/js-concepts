// Concept : Optional Chaining

const fetchData = async () => {
    const data = await fetch('imaginaryapi.com');
    // const name = data.person.name;
    const name = data?.person?.name;
    return name;
}

fetchData();