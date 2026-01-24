const name="Rishabh"
const repoCount= 50

//console.log(name+repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ;

const gameName = new String(`Rishab-sss`)

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("R"));


const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-10,6)
console.log(anotherString)

//javaScript slicing is position-based, not direction-based
//Reverse slicing does not exist in JS

const newStringOne= "    Rishabh   "
console.log(newStringOne);
console.log(newStringOne.trim());// (.trim )in string simply removes the  start and end spaces between between the characters

const url = "https://rishabh.com/rishabh%20raj"

console.log (url.replace('%20','-'))

console.log(url.includes("rish"))
console.log(url.includes("papu"))

console.log(gameName.split('-'))
