const myProgramingLanguage = ['js', 'php', 'c', 'python', 'Java']

//es5
// var top1 = myProgramingLanguage[0];
// var top2 = myProgramingLanguage[1];
// var top3 = myProgramingLanguage[2];

// console.log("My fav programing language is  " + top1);

// es6
//let [top1, top2, top3, top4, top5] = myProgramingLanguage;
//console.log("My fav programing language is "+ top1);
console.log(myProgramingLanguage.length);

//First and last values of array 
/* let[top1,,,,toplast] = myProgramingLanguage;
console.log(`My fav programming laguage is ${top1} and second fev laguage is ${toplast}.`); */

// first and rest all values of array
let [top1, top2, ...toprest] = myProgramingLanguage;
console.log(`I am good at ${top1} and want to improve ${toprest}.`); 


