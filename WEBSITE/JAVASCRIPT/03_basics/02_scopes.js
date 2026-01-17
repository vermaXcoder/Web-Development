
var c = 499
let a =12
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner value",a);
    
}
console.log(a);
// console.log(b);
// console.log(c);



function one(){

    const username = "Rishabh"
    function two(){
        const website = "youtube"
      //  console.log(username);  // this function is executing because child can access parent values
    }
    // console.log(website);
    two()

    
}
one()

if (true){
 const username = "Rishabh"
    if(username === "rishabh"){
        const website = " youtube"
       // console.log(username + website);
        
    }    
    // console.log(website);
    //console.log("Outer : ",username);
    
}
// console.log(username);



// +++++++++++++++++++Interesting++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1;

}


addTwo()
const addTwo = function(num){
    return num + 2
}

    
