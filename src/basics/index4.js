// Concept - template Literal

const fetchData = async (animalName) => {
    const data = await fetch('imaginaryapi.com/searchTerm=' + animalName);

    const data2 = await fetch(`imaginaryapi.com/searchTerm=${animalName}`)
    console.log(data2);
    // const name = data.person.name;
    const name = data?.person?.name;
    return name;
}

fetchData();