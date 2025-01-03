// Way 2 to do this , Async Await 

/**
 *  It only works inside function , also the function needs to be async
 * 
 * 
 * 
 */

async function fetchData1() {
    // 
}
console.log(fetchData1);

const fetchData2 = async () => {
    const data = await fetch('https://cat-fact.herokuapp.com/facts');

    console.log('Dataa', data);
}

fetchData2();