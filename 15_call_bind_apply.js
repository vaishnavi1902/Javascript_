const car1 = {
    name : "nexon" , 
    color : "black"  ,
    year : 2022 , 
    information :  function(){
        console.log(`Name is ${this.name} , color is ${this.color} and year is ${this.year}`)
    }
}

const car2 = {
    name : "nano" , 
    color : "yellow"  ,
    year : 2011
}

const car3 = {
    name : "swift" , 
    color : "white"  ,
    year : 2014 ,
    printinfo :function(type) {
        console.log(`Name is ${this.name} , color is ${this.color} and year is ${this.year} and type is ${type}`)
    }
}

const car4 = {
    name : "lambo" , 
    color : "blue"  ,
    year : 2019
}
car1.information.call(car2);
car1.information.apply(car3);
let x = car1.information.bind(car4);
// console.log(car1.information.bind(car2)())
console.log(x());
car3.printinfo.call(car4 , "petrol")
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
car3.printinfo.apply(car4 , ["diezel"])


// In the following example, the bind() method is used to bind person.display to person.
// This example will display the person name after 3 seconds:
const person = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = this.firstName + " " + this.lastName;
      console.log(x);
    }
}

let display = person.display.bind(person);
setTimeout(display, 3000);