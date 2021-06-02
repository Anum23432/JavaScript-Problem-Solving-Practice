// PROBLEM 1
let color = ["#ffe4c4","#776ec7"];
let i = document.querySelector("#a");
 i.addEventListener("click" , function changeColor() {
      i = 0; i < color.length ; ++i ;
    document.querySelector("p").style.backgroundColor = color[i];
    
})
// PROBLEM 2

let font = ["#8b4513","#ff0505"];
let c = document.querySelector("#b");
c.addEventListener("click" , function fontColor() {
    c = 0 ; c < font.lenght ; ++c ;
    document.querySelector("h1").style.color = font[c];
})
/* PROBLEM 3
 if we want to comment various lines in js we will do it by this method
let x = 25;
let y = 13;
let a = x + y;
console.log(x + y);*/
// PROBLEM 4

let name = "minahil";
    age = 20;
    isMarried = false;
    spouse = null;
    address = 'karachi';
    postalCode = 23564 ;
    education = "webdev";
    percentage = 75.5 ;

    console.log("name");
    /*in console.log name , education and address is string, age and postalcode are number type
    is married is boolean and spouse is null datatype*/
