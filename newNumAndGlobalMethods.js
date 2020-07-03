/* Number & global methods in ES6.

the isFinite() method
the global isFinite() method returns false if argument is infinity or NaN.

the isNaN() method
the global isNaN() method returns true if the argument is NaN.
otherwise it returns false:

the Number.isInteger() method
the Number.isInteger() method return true if the argument is an integer.
 */

 // isFinite()
 // the number you can count that means isFinit = true. infinity shows false
 let numOne = 5;
 console.log(isFinite(numOne));

 //isNaN()
 let numTwo = "Radhika";
 console.log(isNaN(numOne));
 console.log(isNaN(numTwo));

 //Number.isInteger;
 let numThree = 1.2;
    console.log(Number.isInteger(numOne));
    console.log(Number.isInteger(numTwo));
    console.log(Number.isInteger(numThree));