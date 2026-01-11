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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty ('isLogged'));





//DESTRUCTURING OF THE OBJECTS
const course = {
    coursename:"Js in Hindi",
    price: "999",
    courseInstructor: "Rishabh"
}
//   course.courseInstructor

const {courseInstructor: instructor}= course

console.log(instructor);



/* jb bhi apna kaam  kisi aur ke sir pr dal dena hai usi ko APIs kehte hai 😂😂😂

 // APIs is like , kuch values aati hai backend se , us values ko aap kaise likhte hai 
  pehle xml ke form  me aati thi values ab kaise aati hai json(JavaScript object notation) me 



 */


//   {
//     "name":"Rishabh ",
//     "coursename": "js in hindi",
//     "price": "free"
    
//   }