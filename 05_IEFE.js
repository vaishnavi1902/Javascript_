
// immediately invoked function expression
// this function will get immedietly invoked after execution of file
(function exec(){
    console.log(`executed one`)
})();
// semicolon stops the execution of the function

(() => {
    console.log(`executed two`)
})();
// namaed function
( executed = () => {
    console.log(`executed three`)
})();

// parameterized 
((name) => {
    console.log(`my name is ${name}`)
})("vaishnavi");