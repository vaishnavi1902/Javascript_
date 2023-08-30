function first(){
    console.log(this) //returns the complete information of a global object
}
first()
console.log(this) // returns {}

const obj = {
    name : "vaishu",
    surname : "kumbhakarna" , 
    age : 23 , 
    weight : 42 , 
    height : 160,
    printname : function (){
        console.log (this.name)
    }
}
obj.printname() // return vaishu 
console.log (obj.printname()) // return vaishu and undefined

const arrowf = () => { 
    fname = "vaishnavi"
    console.log(this) // returns {}
    console.log(this.fname) // undefined
    console.log(fname)
}
arrowf()


const addtwo = (num1 , num2) => {
    return num1 + num2
}
// also be written as 
const addtwo1 = (num1 , num2) => num1 + num2 

console.log(addtwo(4,5)); // 9 
console.log(addtwo1(3,5)); // 8
