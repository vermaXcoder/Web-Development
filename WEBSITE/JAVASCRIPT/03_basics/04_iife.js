// Immediately Invoked Function Expressions
 (
function chai(){
    console.log(`DB CONNECTED`);
})() ;

//IIFE - global scope ke pollution se problem hoti hai kai bar, to us global scope ke variable se bachne ke liye hum iife ka use krte hai 
((name)=>{
console.log(`DB CONNECTED T`);

})('Rishabh')