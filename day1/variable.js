console.log("start");

//globalscope
var a=10;
console.log(a);

//local scope
let b = 20;
console.log(b);

const c = 30;
console.log(c);

console.log("end");

//block scope

{
    var m = 100;
    console.log(m);

    let n = 200;
    console.log(n);
}