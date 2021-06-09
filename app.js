// PROBLEM 1-- JSDOM--


function change() {
    // changed class

 let a = document.getElementsByClassName("first").className = "xyz";
console.log(a);

// changed border
let b = document.querySelector(".first").style.border = "solid blue";
console.log(b);

// changed text color
let c = document.querySelector(".first").style.color = "black";
console.log(c);
// PROBLEM 2 QUERY SELECTOR---

let d = document.querySelector(".first").className = "fourth";
console.log(d);
}

// so here the test 1 is aquiring the styling of .fourth class which is declared
// in style . css

// PROBLEM 3--STYLING DOM--

function color() {
 let e = document.querySelector(".second").style.backgroundColor = "pink";
 console.log(e);

 let f = document.querySelector(".second").style.fontStyle = "italic";
 console.log(f);
//  font style is changed.

}

// PROBLEM 4 --AddEventListener--

document.querySelector(".third").addEventListener("click" , function(){

alert("Hello World.");
})






