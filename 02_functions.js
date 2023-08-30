function printmyname() {
    console.log(`My name is Vaishnavi`)
}
printmyname() //function call

    // parameterzed 
function paramPrintmyname(name = "vaishnavi"){
    // if parameter is not specified in function call then it take the default parameter assigned to it
    console.log(`My name is ${name}`)
}
paramPrintmyname("ishita")

function isloggedin(user){
    if(!user){
        console.log("please specify username")
        return 
    }
    console.log(`User logged in as ${user}`)
    return
}
isloggedin("vaishnavi1902")
isloggedin()
console.log(isloggedin("hellouser123"))

// functions with arrays and objects 

function calc_price(...prices){
    console.log(prices);
    return 
}
calc_price(200,300,400,600,1200)

const objects1 = {
    name : "vaishnavi",
    surname : "kumbhakarna",
    division : "Final_Y(B)"
}
function readdata(obj){
    obj.name = "vaishu" //changes the name 
    console.log(obj) // prints complete object
    console.log(obj.division) //prints the division of object
}
readdata(objects1)