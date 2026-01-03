/*

datatypes are mainly divided into two types officially on the basis of "how it stored" and "how it is accessed"/ recovered/ 
*/


//Pritmitive -call by value

// 7 types: String, Number, Boolean, Null, undefined,symbol(to make any value unique), Bigint


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail;
const id= Symbol('123')
const anotherId=Symbol('123')


console.log(id== anotherId);

const bigNumber= 325454n
// console.log(bigNumber)

// Reference types(not Primitive)
// Array,Objects , Functions

const heros =["shaktiman","naagraj","doga"];


let myObj= {
    name: "Rishabh",
    age: 22,

}
   
const myFunction= function(){
    console.log("Hello world");
}
console.log(typeof funciton)

/*

 dataTypes 
 Undefined = "Undefined"
 Null ="Object"
 Boolean = "boolean"
 Number = "number"
 string= "string"
  Onject (native and does not implement [[Call]])= "object"
  
  Object(antice or host and does implement [[Call]]) = "function"
  
  Object (host and does not implement[[Call]])= implementation - defined except may not be "undefined","boolean","number", or "string".
*/



//+++++++++++++++++++++++++++++++++++++++++++++++++++

//MEMORY--------------------

//Stack (Primitive)=we get a copy here , 
// Heap(Non-Primitive)= we get a reference 


let myYoutubename= "VermaXcoder"
anothername= "anothercoder"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi: " usere@ybl"
}

let userTwo= userOne

userTwo.email= "Rishabh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email)
