//const coding = ["js", "ruby","java","python","c"]

//  const values=  coding.forEach( (item) => {

   // console.log(item);
   // return item
// })
// console.log(values);

const myNums  =[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num) =>  num > 4)
// console.log(newNums);
   /* ye jo operations hai ye forEach ke ander bhi hota hai but forEach jo hai wo apko values return nahi krta hai , ye (filter) values return krta hai  */


   /*In filter you will get a call back function and under which all values are each accessed  but after that you have to give a condition  and  all that values which satisfies those conditions will get returned and rest won't. */


// const newNums= myNums.filter( (num) => { 
    
//    return num > 4
// }) // yaha  {} dene se scope start kr diya hai aur scope start krne se  return keyword likhna hi padta hai warna  return me bs [] hi aata hai .
// console.log(newNums);




const newNums=[]
myNums.forEach( (num) => {
     if(num>4 ){
        newNums.push(num);
}
})

console.log(newNums);
