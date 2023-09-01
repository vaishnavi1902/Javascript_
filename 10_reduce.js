const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)`  
const numstotal = myNums.reduce( (acc , item) => acc + item ,  0 )

console.log(numstotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
const totalprice = shoppingCart.reduce((accumulators , items)=> accumulators +  items.price ,  0)

console.log(totalprice);