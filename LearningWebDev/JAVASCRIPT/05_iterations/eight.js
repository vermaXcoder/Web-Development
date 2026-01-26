
const myNums  =[1,2,3,4,5,6,7,8,9,10]

const initialvalue =0 


// const mytotal = myNums.reduce( function( acc, currval) {
//     console.log(`acc value: ${acc} and currval : ${currval}`);
//  return  acc + currval
// } ,0)

const mytotal = myNums.reduce((acc, currval) => acc+currval,0 )

console.log(mytotal);


const shoppingCart = [
{
    itemName : "Js course",
    price : 2999
},
{
    itemName : "py course",
    price : 999
},
{
    itemName : "Data scientist course",
    price : 12999
}

]

const TotalPrice = shoppingCart.reduce((acc, item ) => acc + item.price,0)

console.log(TotalPrice);
