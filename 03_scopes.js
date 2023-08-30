const a = 90
let p = 78
var c = 72

if(true){
    var c = 89
    let p = 3
    console.log(p) 
}
console.log(p)

function one () {
    const name = "vaishnavi"
    const age = 89
    function two() {
        const name = "vaishu"
        const weight = 34
        console.log(name)
        console.log(age)
    }
    // console.log(weight) //error
    console.log(name)
    two()
}
one()

const myfun =  function(myname) {
    console.log(`my name is ${myname}`)
}
myfun("vaishnavi k . ")

 