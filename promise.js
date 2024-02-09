const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
     // creating promise without variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then((user)=>{
    console.log(user);
})
// ERROR

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Shubhradeep", password: "xyz"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// *** IMIDIATE INvoke in not applicable here

// (async () => {
//     const response = await promiseFive;
//     console.log(response);
// })();

const fetchData = async () => {
    // const response = await promiseFive;
    // console.log(response);    /// if you actually want to handle an exception. use try-catch
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// Call the async function
fetchData();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/Shubhradeepp')
.then((response) => {
    return response.json()
})
.then((data) => {
    // console.log(data.id);
    return data.login
}).then((name) => {
    console.log(name);
})
.catch((error) => console.log(error))
