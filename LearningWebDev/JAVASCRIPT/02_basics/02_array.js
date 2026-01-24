const marvel_heroes = ["spiderman", "thor", "Ironman", "HUlk"]

const dc_heroes = [ " superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


const all_new_heroes = [...marvel_heroes,...dc_heroes]   //spread operator

console.log(all_new_heroes)

const another_array = [1,2,4,[5,6],[6,78,[8,7]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)


console.log(Array.isArray("Rishabh"))
console.log(Array.from("Rishabh"))
console.log(Array.from({name:"Rishabh"}))// interesting