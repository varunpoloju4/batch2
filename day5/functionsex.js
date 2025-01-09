// function demo(){
//     console.log("function is executing.....");
// }
// demo(4,5,6);
// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a);
//     console.log(b);
// }
// add(3,4);
// ! names functions
// function test(){
//     console.log("named function is executing.....")
// }
// test();

// anonymous function

// function(){

// }
// ();
// function expression
// let x = function(){
//     console.log("anonymous is executing");
// }
// x();
// // IIFE
// {
//     function(){
//         console.log("IIFE");
//     }
//     (); 
// }
// implicit return and explicit return
function test1(a,b){
        return a+b;
}
console.log(test1(5,5));

let x = (a,b) => {return a*b};
console.log(x(5,5));

let y = (a,b) =>a+b;
console.log(y(100,200));
