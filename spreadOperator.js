//es5
function sumOfAll(a,b,c){
    console.log(a+b+c)
}
//sumOfAll(1,4,7);

var arrVal = [2,5,7];
sumOfAll.apply(null, arrVal);

//es6
function makeSum(h, t, p){
    console.log(h+t+p);
}
let arr = [4,7,9];
makeSum(...arr);

//es5
//replace concat
var arr1 = [1,3,8];
var arr2 = [4,6,3];
var arr3 = [2,5,8];
arr1 = arr1.concat(arr2);
console.log(arr1);

//spred oprator
arr1 = [...arr1,...arr2,...arr3];
console.log(arr1);

//replace copy
let arrc1 = [1, 2, 3];
let arrc2 = arrc1;
arrc2.push(4,5);
console.log(arrc2);
console.log(arrc1);

//spread Operator. here arrc2 got extra value 4, 5
arrc2 = [...arrc1, 4, 5];
console.log(arrc2);
console.log(arrc1);


 