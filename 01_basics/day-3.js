// Data Types Summary 
// primitive data types are =>
// Number , String , Boolean, Null , Undefined , Symbol , BigInt

// Non Primitive data types or reference data types are =>
// Object , function , arrays

// bigint
const bigIntnum = 12345678909876542424n
console.log(typeof bigIntnum) 

// Arrays in js
const A = [1,2,3,4,5,6,7,8,9]
for( i = 0 ; i < 6 ; i++){
    console.log(A[i])
}
console.log(A)

// function in js
function one(){
    console.log("This is function one")
}
one();

// Objects in js

let obj = {
    name : "vaishnavi",
    surname : "kumbhakarna",
    age : 22,
    gender : 'F',
    salarized : "NO" , 
    year : 4
}
console.log(obj)