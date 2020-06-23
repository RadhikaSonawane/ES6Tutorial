let bioData = {
    myName :  "Radhika",
    age : 30,
    degree : "Computer"
}
console.log(`my name is ${bioData.myName}`);
// object destructuring
let{myName,age,degree} = bioData;
// without bioData you will get answer. 
console.log(`my name is ${myName}`);

//how to access object inside object
let color = {
    myCykel : "Silver",
    myBag: "Black",
    myFavoriteColor: {
        first : "Red",
        second: "DarkPink",
        third: "Black"
    }
}
let {myCykel, myBag, myFavoriteColor} = color;
console.log(`My cykel color is ${myCykel} and my fevorite color is ${myFavoriteColor.first}.`)
