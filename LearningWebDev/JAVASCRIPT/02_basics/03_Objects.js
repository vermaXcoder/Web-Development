1// singleton


//object literals

const mySim = Symbol("key1")

const JsUser = {
    name: "Rishabh",
    "Full name": "Rishabh Raj",  //now you don't have any method to access this  full name, and so you have to  use  square notation ["Full name"] 
    age: 22,
    location: "Assam",
    [mySim]: "mykey1",
    email : "Rishabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(typeof JsUser[mySim])

JsUser.email= "Rishabh@chtgpt.com"
// Object.freeze(JsUser)
JsUser.email= "Rishabh@microsoft.com"

// console.log(JsUser)


// functions can be treated as variables , no difference will occcur .

JsUser.greeting = function(){
    console.log("Hello Js User ");
}

JsUser.greetingTwo  = function(){
    console.log(`Hello Js User,${this.name} `);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());