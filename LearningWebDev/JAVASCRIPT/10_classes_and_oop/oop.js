const user= {
    username: "Rishabh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Received data from Database");
        // console.log(`Username: ${this,this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username= username,
    this.loginCount= loginCount,
    this.isLoggedIn = isLoggedIn
    return this    // return likhe ya nahi likhe  value show krega hi kyunkie  ye implecitely define hota hi hai 

}

const userOne =  new User("Rishabh",12,true)
const  UserTwo=  new User("raj",2,false)

// yaha  new nahi likhne se Userone ka  username  ko userTwo wala username overright kr deta hai , isliye new likhna jaruri hai 


console.log(userOne);
console.log(UserTwo);