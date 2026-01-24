// if

const isUserloggedIn= true
const temperature = 41

if(temperature ===40){
    console.log("less than 50");
}else{
    
console.log("temperature is greater than 50");
}

console.log("Executed")

// < , > , <=, ==, !=, ===, !==

const score = 200
if(score>100){

    const power = "fly"
    console.log(`user power: ${power}`);
    
}
// console.log(`user power: ${power}`);//power in not defined 


const balance = 2000;

if(balance < 1000){
    console.log("greater than 1000");   
}
else if(balance < 1500){
    console.log("greater than 1500");
    
}
else{
    console.log("greater than 1999");
    
}

const userLoggerIn = true
const debitCard = true
const loggedInFromGoogle= false
const loggedInFromEmail = true

if (userLoggerIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("UserLoggedIn");
    
    
}