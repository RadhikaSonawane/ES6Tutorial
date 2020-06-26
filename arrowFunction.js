// es5
var sum = function(){
    var p = 5;
    var q = 20;
    return p+q;
}
console.log(sum());

//es6
const sum1 = () => {
    let r = 6;
    let s = 19;
    return r+s;
}
console.log(sum1());

// es 6 globle variable
let t = 10;
let u = 20;

const sumTwo = () => t+u;        
console.log(sumTwo());

// es6 one more eg.

const sumThree = (v, w) => v+w;
console.log(sumThree(15, 20));