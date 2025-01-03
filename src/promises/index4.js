// but here our catch is missing ???? , how will be adding the catch here 

const fetchData3 = async () => {

    try {
        const data = await fetch('https://cat-fact.herokuapp.com/facts');

        console.log('Dataa', data);
    } catch (err) {
        console.log(err);
    }

}

fetchData3();