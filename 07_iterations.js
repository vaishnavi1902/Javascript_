// for loops

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 2) {
        console.log("5 is best number");
    }
    console.log(element);
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 3) {
        console.log(`Detected 3`);
        break
    }
   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

// Do while loops
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 15);

// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// skips repeatation

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// for loops for object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } 
//  as it is not iterable
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


// loop for [{} , {} , {}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((item) => {
    
//     console.log(item.languageName);
// } )
myCoding.forEach((item) =>{
    console.log(item.languageName);
})