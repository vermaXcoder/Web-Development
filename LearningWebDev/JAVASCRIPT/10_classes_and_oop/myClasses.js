// class User{
//     constructor(username,email,password){
//         this.username= username,
//         this.email= email,
//         this.password=password
//     }

//     encryptpassword(){
//         return `${this.password}abcc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const chai = new User("chai", "email@gmail.com","difche")

// console.log(chai.encryptpassword());
// console.log(chai.changeUsername());

//behind the scenes
function User(username,email,password){
    
        this.username= username,
        this.email= email,
        this.password=password
    }

    User.prototype.encryptpassword= function(){
        return `${this.password}abcc`
    }
    User.prototype.changeUsername =function(){
        return `${this.username.toUpperCase()}`
    }

const tea = new User("TEA", "email@gmail.com","difche")

console.log(tea.encryptpassword());
console.log(tea.changeUsername());