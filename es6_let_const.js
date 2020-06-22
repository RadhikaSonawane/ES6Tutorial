/* 
Summary
var is functional scope
let, const are both BLOCK scope
const, cannot be reassigned, however it is mutable 
*/


/* Here we will get same values
 */
// var name = "Radhika"
// console.log(name);

// let name = "Radhika"
// console.log(name);

// const name = "Radhika"
// console.log(name);

/*Block Scope : In Javascript you can define a code block using curly braces i.e {}.
Consider the following code that has 2 code blocks each delimited by {}.*/

  /* Since we are using "var a=10", scope of "a" is limited to the function within which it is defined. In this case it is within the global function scope */
{
    var a=10;
    console.log(a);
  } //block 1
  {
    a++;
    console.log(a);
  } //block 2


     /* Since we are using "let a=10", scope of "a" is limited to block 1 and "a" is not recognized in block 2 */
  {
    let a=10;
    console.log(a);
   } //block 1
   {
     a++;
     console.log(a);
   } //block 2

/* 
Function Scope:
In Javascript you limit the scope of a variable by defining it within a function. This is known as function scope.
The keyword var is function scoped i.e. it does not recognize curly brackets i.e. {}, as delimiters. Instead it recognizes the function body as the delimiter.
If we want to define a variable using var, and prevent it from being defined in the global namespace you can re-write it by enclosing the code blocks within functions. 
*/


/* Since we have enclosed block1 and block2, within separate functions, the scope of "var a=10", is limited to block 1 and "a" is not recognized in block 2 */
function block1() {
    var a=10;
     console.log(a);
    } //function scope of block 1
    function block2() {
      a++;
      console.log(a);
    } //function scope of block 2


/* 
The “const” keyword:
If a variable is defined using the const keyword, its scope is limited to the block scope. 
In addition the variable cannot be reassigned to a different value. 
*/

/* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */
{
    const PI=3.14;
    console.log(PI);
} //block 1
{
    //console.log(PI);
} //block 2


/* This code will run without any errors, and shows that we CAN mutate the values that are defined by "const" */
{
    const a = [1,2,3];
    const b = {name: "hello"};
    a.push(4,5);     //mutating the value of constant "a"
    b.name="World";  //mutating the value of constant "b"
    
    console.log(a); //this will show [1,2,3,4,5]
    console.log(b); //this will show {name: "World"}
    
   }

   /* However note that these variables defined by const cannot be re-assigned. */
   {
    const name = "Mike";
    const PI = 3.14; 
    const a = [1,2,3];
    const b = {name: "hello"};
    
    //name="Joe"; 
        //this will throw an error, since we are attempting to re-assign "name" to a different value.
    //PI = PI + 1; 
        //this will throw an error, since we are attempting to re-assign PI to a different value.
   // a = [1,2,3,4,5];
        //this will throw an error, since we are attempting to re-assign "a" to a different value.
   // b = {name: "hello"};
        //this will throw an error, since we are attempting to re-assign "b" to a different value.
   }
