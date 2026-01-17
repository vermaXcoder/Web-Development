const User = {
username: "Rishabh",
price: "199",
welcomeMessage : function (){
    // console.log(`${this.username} welcome to the website`);
    // console.log(this);
    
    
}

}
// User.welcomeMessage()
// User.username ="Sam"
// User.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rishabh"
//     console.log(this.username );//"this " keyword is doesnot work on funtion only work on  Object . 
    
// }
// chai()



// const chai = function chai(){
//     let username = "Rishabh"
//     console.log(this.username );// Undefined
// }
// chai()


// const chai = ()=> {     //just use "=>" in place of this to use arrow function 
//     let username = "Rishabh"
//     console.log(this);// Undefined
// }
// chai()




// const addTwo = (num1, num2)=>{   this is basic arrow function
//     return num1 + num2;
// }

// another way of using arrow function is , that is called  implicit return 
const addTwo = (num1, num2)=> ( {username:"Rishabh"});

console.log(addTwo(3,4));


/*NOTE : if you use curly braces then you  have to use  return keyword but if you use paranthesis then there is no need to write return keyword 
>> To return Object you must have wrap it with paranthesis

*/ 