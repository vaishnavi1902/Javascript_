// Arithmetics in JavaScript 
const age = 23
console.log(age) //will print 23

// Number can also be declared as
const marks =  new Number(93);
console.log(marks) //[Number: 93]
console.log(typeof marks); //returns object

// some Number methods
let x = 123.4567
console.log(x.toFixed(2)) //123.46
console.log(x.toPrecision(4)) //123.5
console.log(x.toString())
console.log(typeof x.toString())

let c = -98
console.log(Math.abs(c)) //98
console.log(Math.min(12,45,2,657,343,9)) //2
console.log(Math.max(12,45,2,657,343,9)) //657
console.log(Math.round(4.8)) //5
console.log(Math.ceil(4.8)) //5
console.log(Math.floor(4.8)) //4
console.log(Math.pow(4,3)) //64

// there are lots of more number and Math method in javascript . You can see all of them and learn on MDN official documentation or in browser console 

// Date and time in javascript

let today = new Date();
console.log(today) // 2023-08-26T12:12:20.011Z
console.log(today.getDate()) //26
console.log(today.getDay()) // 6 (because today is saturday )
console.log(today.toString()) // Sat Aug 26 2023 17:45:54 GMT+0530 (India Standard Time)
console.log(today.toDateString())  // Sat Aug 26 2023
console.log(today.toLocaleString()) // 8/26/2023, 5:45:54 PM
console.log(today.toLocaleDateString()) // 8/26/2023
console.log(today.toJSON())   // 2023-08-26T12:12:20.011Z
console.log(today.getMonth()); // 7 (as months counts from zero)
console.log(today.getMonth().toString()); // 7