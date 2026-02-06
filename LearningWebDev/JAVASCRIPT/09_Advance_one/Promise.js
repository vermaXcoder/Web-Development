const promiseOne = new Promise(function (resolve, reject ){
//Do an async task 
// DB calls , cryptography, network

setTimeout(function (){
    console.log('Async task is complete');
    resolve()

},1000)

})


promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("async  2 resolved");

})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@email.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        
        


        
    },1000)
})
promiseFour.then((user)=> {
    console.log(user);
    return user.username   
}).then((username) =>{
    console.log(username);
    
}).catch(function (error){
    console.log(error);   
}).finally(() => console.log('The promise is either is resolve or rejected'))



const promiseFive = new Promise(function(resolve, reject){
      setTimeout(function(){
        let error= true;
        if (!error) {
            resolve({username: "Javascript",password: "12344"})
        }else {
           reject('ERROR: Js went wrong')
        }
    },1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);  
    }
}

consumePromiseFive()

// jb is tarah se promise designed hai aur errors aa sakti hai , ya manlo aap network request hi kr rahe the aur uske ander ye problem aaa gai 
// Aur async await ka ek problem kya hai ki ye async await ka wait nahi kr sakta hai.

// async  function getAllUsers(){
//  try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data= await response.json();
//    console.log(data);
//  } catch (error) {console.log("E: ",error);
 

    
//  }
// }
// getAllUsers()

fetch('https://api.github.com/users/vermaXcoder')
.then((response)=>{

    return response.json()

})
.then((data) =>{
    console.log(data); 
})
.catch ((error) => console.log(error));