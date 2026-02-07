let myName= "Rishabh          ";

// console.log(myName.length);       




let myHeros = ["thor", "ironman","spiderman"];

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.Rishabh =function(){
    console.log(`Rishabh is present in all objects`);
    
}

Array.prototype.HeyRishabh = function(){
    console.log("whats happening here ")

}

// heroPower.Rishabh();
// myHeros.Rishabh();
// myHeros.HeyRishabh();
// heroPower.HeyRishabh();



//inhritance

const User = {
    name: "Bhai",
    email: "Bewakoof@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}


const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUsername = "ChaiAurCode"


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"Rishabh".trueLength()
"Ri".trueLength()