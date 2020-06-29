// es5
function sum(a, b, c, d, e, f, g){
    console.log(a+b+c+d+e+f+g);
}

sum(1, 2, 3, 4, 5, 6, 7);

//es6
function sumValue(...input){
   // console.log(a+b+c+d+e+f+g);
   console.log(...input);
   //console.log(input)
   let total = 0;
   for(let i of input){
       total += i;
    }
      console.log(total);  
}
sumValue(1, 2, 3, 4, 5, 6, 7);

function plyerNames(w, x, y, ...z){
    console.log(w);
    console.log(x);
    console.log(z.length);
    console.log(z[0]);
}

plyerNames('Pelle', 'Cristiano', 'Ronaldo', 'Lionel', 'Robin', 'Sid');
