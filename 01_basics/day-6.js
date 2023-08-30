// day 6 of javascript
// Arraysin JavaScript
const ar1 = ["vaishnavi" , "sandeep" , "Kumbhakarna"];
console.log(typeof ar1)  //object
// can also be declared as
const ar2 = new Array("one" , "two" , "three");
console.log(typeof ar2) //object
console.log(ar1)  
console.log(ar2) 
console.log(ar1.concat(ar2)) //combine two arrays
console.log(ar1.includes("vaishnavi")) //true
console.log(ar1.sort()) //sorts the array
console.log(ar1.slice(1,2)) //returns sandeep and also makes no changes in original array
console.log(ar1.splice(1,2)) //returns sandeep kumbhakarna and also makes the original array as ["sandeep" , "kumbhakarna"]
console.log(ar2.indexOf("three"))  //2
ar2.push("four")
console.log(ar2)
ar2.shift("one")
console.log(ar2)
console.log(ar2.pop()) 
console.log(ar2);
ar2.push("five") 
ar2.push("six")
console.log(ar2);
// in javascripts array can contain element of different datatypes
let array1 = [1 , "hello" , false , 'c' , ["vaishnavi" , "sandeep" , "Kumbhakarna"]]
console.log(array1);
console.log(array1[4][1]); //sandeep
const array2 = [...array1 , ...ar1]
console.log(array2);
console.log(array1.flat(Infinity));
console.log(Array.isArray("vaishnavi"))
console.log(Array.from("vaishnavi"))
let a = 91
let b = 92
let c = 93
console.log(Array.of(a,b,c))