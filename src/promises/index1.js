// let imagine we have a api to fetch , it takes time depending upon the location , internet speed


// const moviesData = fetch('url.com/movies');

// console.log(moviesData);

//  Since Js is synchronous language ,this wont work as the console log will work directly after fetch line without waiting for the movies to be fetched totally 

//  Problem : It is not actually waiting for the request to be done

//  Solution : Concept of Promises here needs to be used , it waits for the data to be loaded here the core idea of the promise is shown.

// core concept
const event = new Promise((resolve, reject) => {
    let name = 'Mayank';
    if (name == 'Mayank') {
        resolve(name);
    } else {
        reject('Name was not Mayank');
    }
})

// Here event is the promise , so only 2 outcomes will be there resolve it returns the value and rejected when it is not returning anything / error 

// event.then => will be called if promised is resolved  , We define the success function

// event.catch => will be called if promised is rejected , we define the error function

event.then((name) => {
    console.log(name)
})
    .catch((err) => {
        console.log(err)
    })
