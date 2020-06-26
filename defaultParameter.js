// es 5
function mult(b, c){
    c = (typeof c !== 'undefined') ? c : 2
    console.log(b*c);
}

mult(5);

// es 6
 const multi = (a, b=4) =>{
   console.log(`the answer is ${a*b}`);
 }
 multi(5);