const myname = "Vaishnavi"
const mysurname = "Kumbhakarna"
let fullname = myname + mysurname
console.log(`my full name is ${myname} ${mysurname}`) 
for(let i = 0 ; i < fullname.length ; i++ ){
    console.log(fullname.charAt(i));
}
console.log(fullname.indexOf('b'));


// declaration of strings as objects
const language = new String("JavaScript")
// use {variablename}  instead of variablename
// use ${variablename}  in double quotes "${variablename}"
console.log(typeof {language})
console.log(`${language}`)
const str = "how-are-you"
// it splits the whole string considering 
// some specific character
console.log(str.split("-"))

const webaddress = "https://www.google%20.com";

console.log(webaddress.replace("%20",""))
console.log(webaddress.includes("%20")); //returns true
console.log(webaddress.includes("%21")); //returns false