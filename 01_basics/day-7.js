// objects in javascript
// object declaration
const one = {}
console.log(one) //{}
const two = new Object();
console.log(two); //{}

const hobby = Symbol("myhobby")
// this is object literal
const obj = {
    age : 20 , 
    gender : "Female" ,
    isloggedin : true , 
    loggedincount : 23 , 
    fullname : {
        f_name : "vaishnavi" , 
        m_name : "sandeep" ,
        l_name : "kumbhakarna"
    },
    active_Days : ["Monday" , "Wednesday" , "Thursday"],
    [hobby] : "coding"
}
console.log(obj);
console.log(obj.fullname.f_name)
console.log(obj[hobby]);


obj.namaste = function (){
    console.log("Namaste Everyone")
}
obj.namaste()
// console.log(obj.namaste())

// this is singleton  object or the object by constructor
const tinderuser = new Object();
tinderuser.fname = "kirti"
tinderuser.mname = "kartik"
tinderuser.lname = "kurle"
tinderuser.age = 23
tinderuser.gender = "Female"
tinderuser.salary = 45000
tinderuser.isloggedin = true
tinderuser.pairfound = false
console.log(tinderuser)

console.log(tinderuser.name);

// combination of objects
const object1 = {one : "first" , two: "second"}
const object2 = {age : 23 , weight : 41 , height : 152}
const object3 = {password : "@123456" , confirm_password: "@123456"}
const object4 = {email : "vaishnavi01@gmail.com" , username : "vaishnavi1902"}
// here {} this blank object is target and object1 , object2 , object3 are source 
const user_details = Object.assign({}, object1 , object2 , object3 , object4)
console.log(user_details);
// by using ... spread operator
const spreadall = {...object1 , ...object2 , ...object3 , ...object4}
console.log(spreadall);
// returns the keys in array
console.log(Object.keys(spreadall))
// returns the values of keys in array
console.log(Object.values(spreadall)) 

console.log(tinderuser.name); 
