// const tinderUser = new Object()  , this is a singletone Object 
const tinderUser = {}//this is not singletone Object


tinderUser.id = "ee343"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email:"some@gmail.com",
    fullname :{
        userfullname : {
            firstname:"Rishabh",
            Lastname:"Raj"
        }
    }
}
// console.log(regularUser.fullname.userfullname.Lastname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}


// const obj3 = {obj1,obj2};
// const obj3= Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}

// console.log(obj3)

const users = [
    {
        id:1  ,
        email: "a@gmai.com"
    },
    {
        id:1  ,
        email: "a@gmai.com"
    },
    {
        id:1  ,
        email: "a@gmai.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty ('isLogged'));