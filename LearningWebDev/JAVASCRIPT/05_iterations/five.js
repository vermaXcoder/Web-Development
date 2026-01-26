const coding = ["js", "ruby","java","python","c"]

// coding.forEach( function (val) {
//     console.log(val);
// })


// coding.forEach((element) => {
//     console.log(element);   
// });




// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)



// coding.forEach(  (item, index, arr) => {
//     console.log(item,index,arr);
    
// })


const myCoding = [
{
    languageName: "javaScript",
    languageFileName: "js"
}
,
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "Py"
}

]

myCoding.forEach( (item)=> {

    console.log(item.languageFileName);
})