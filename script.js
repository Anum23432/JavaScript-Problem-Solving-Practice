// PROBLEM 1 -- OBJECTS--
let places = ["Karachi", "Islamabad" , "Quetta" ,"Lahore"]; /*this is an object*/


// keys of an object..
let cities = {
    first : "Karachi",
    second : "Islamabad",
    third : "Quetta",
    fourth : "Lahore",
};
console.log(cities);
// PROBLEM 2 --Accessing object--
console.log(cities.first);
console.log(cities.fourth);

// PROBLEM 3 -- LOOPING OBJECTS-- for in loop--
let x = cities;
for (x in cities) {
    console.log(cities[x]);
}

// PROBLEM 4 -- utility methods-- math methods--
let height = 7.534564;
let h = Math.ceil(height); /*ceil method*/
console.log(h);
// floor method--

let g = Math.floor(height);
console.log(g);

// PROBLEM 5--STRING METHOD--
let cityName = "Tokyo";
let d = cityName.length;
console.log(d);
// answer is 5--
// part b-- index-of method--
e = cityName.indexOf("o");
console.log(e);
//  part c -- search method--
f = cityName.search("o");
console.log(f);
// there is no difference in these two methods both are giving the index number
// of first  "o".

// PROBLEM 6--NUMBER METHOD---
let age = "44";
let i = typeof age;
console.log(i);
// answer is 'string'
// conversion of string into number by number method..
let n = Number("44");
console.log(n);
// now type of 44 is number in console..

// PROBLEM 7-- MAP METHOD--
// part a---
let agesArray = [12,45,56,4];
let t = agesArray.map(p);
function p(t){
    console.log(t);
};
// the array is printed in console.
 let k = agesArray.map(myArray)
 function myArray(sum) {
     return sum * 10;
 }
 console.log(k);
//  the new array of variable k is printed multiplied by 10.
// Part b---
let usersData =  [

    {
    fname: "Saeed",
    lname : "Ahmad",
    school: "UOT",
    profession: "Engineer",
    },
    
    {
    fname : "Ali",
    lName : "Khan",
    school : "TUM",
    profession : "Researcher",
    } 
    ];

    let table = [
        {fname : "Saeed" , lname : "Ahmed" , school : "UOT" , profession : "Engineer"},
        {fname : "Ali" , lname : "Khan" , school : "TUM" , profession : "Researcher"},

    ];
    let j = table.map(printTable);
    function printTable(r){
        return r.fname + " " + r.lname + " " + r.school + " " + r.profession;
    }
    console.log(j);

    // PROBLEM 8 ---date method--
    let today = new Date();
    let now = today.toDateString();
    console.log(now);
    // getDate => prints only date
    // getDay => prints one day of week
    // just Date => prints detail date with gmt.
    // getFullYear => prints year.
    // getMonth => prints month.
    // getMinutes => tell current min.
    // getHours => tell current hour.
    // if we want to print some past time like
    let day = new Date("february 9 2011" );
    let z = day.getDay();
    console.log(z);
    // the answer is 3 it means thursday. 
    