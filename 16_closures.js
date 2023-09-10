function x(){
    let p = 10 ; 
    function y(){
        let q = 20 ;
        function z(){
            let r = 30 ;
            console.log(`Z executed ${p} ,${q} ,${r}`);
        }
        console.log(`Y executed ${p} ,${q}`);
        z();
        // console.log("Y executed");
    }
    console.log(`X executed ${p}`);
    y();
    // console.log("X executed");
}
x();
// ---------------------------------------------
function add() {
    a = 7;
    return  () => a + a;
    
}
let c = add();
console.log(c());
// ----------------------------------------------
const counts = ( function () {
    let counter = 0;
    return function () {
        counter += 1; 
        return counter;
    }
})();
console.log(counts()); // 1
console.log(counts()); // 2
console.log(counts()); // 3
console.log(counts()); // 4
console.log(counts()); // 5

