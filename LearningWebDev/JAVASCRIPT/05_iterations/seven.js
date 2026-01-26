const myNums  =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map ( (num) => { return num+19})

const newNums = myNums
                    .map( (num) => num+28)
                .map( (num) => num +2)
                .filter((num) => num >38)
console.log(newNums);


