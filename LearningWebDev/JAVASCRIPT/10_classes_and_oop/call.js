function SetUsername(username){
    //complex DB calls 
    this.username= username 
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this,username)
    this.email= email
    this.password = password

}
const chai= new createUser("chai","ex@gmail.com","sdwe435@#")
console.log(chai)