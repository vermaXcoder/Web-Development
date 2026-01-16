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



/*function loginUserMessage(username ="You"){
    if(!username){
        console.log("Please enter a username")
        return 
    }

    return `${username} just logged in `
}
console.log(loginUserMessage())
*/


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,3550,3534.343,5433));

const user= {
    username : "Rishabh",
    prices: 199
}
function handleObject(anyobject){
 console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
username: "Sam",
price:399
})

const MynewArray=[200,343,564,5,34.34];

function returnSecondValue(getArrayvalue){
    return getArrayvalue[1]
}

console.log(returnSecondValue(MynewArray));
console.log(returnSecondValue([300,343,454,645,343]));


