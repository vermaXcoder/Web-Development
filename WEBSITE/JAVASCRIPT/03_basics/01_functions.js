// function SayMyName(){
// console.log("R");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("a");
// console.log("b");
// console.log("h");
// }

// SayMyName()

// function AddTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// function AddTwoNumbers(num1, num2){
// //    let Result = num1 + num2;
// //    return Result;
// return num1 + num2;
// }  
// const Result= AddTwoNumbers(2,null);
// console.log("Result:", Result);



function loginUserMessage(username ="You"){
    if(!username){
        console.log("Please enter a username")
        return 
    }

    return `${username} just logged in `
}
console.log(loginUserMessage())