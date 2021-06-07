// // PROBLEM 1-- FOR LOOP--
let games = ["Bedminton" , "Hockey" ,"Cricket" ,"Tennis" , "Basketball"];
for(let i = 0; i < games.length; i++){
    console.log(games[i] + " ");
}
let a = games.includes("Cricket");
console.log(a);
if(a == true){
    console.log("Cricket exist.");
}
else{
    console.log("doesnot exist.")
}
// PART B-- FOR EACH LOOP--

games.forEach(function (value) {
 console.log(value);
    if (value == "Cricket"){
        console.log("Cricket exist.");
    }
    else{
        console.log("doesnot exist.")
    }
})
// PART C ----FOR OF LOOP---
for(let names of games){
    console.log(names);
    if(names == "Cricket"){
        console.log("Cricket exist.")
    }
    else{
            console.log("doesn't exist.")
        }
    
}

// PROBLEM 2-- indexOf--

// let games = ["Bedminton" , "Hockey" , "Cricket" ,"Tennis" , "Basketball"];
console.log(games.indexOf("Cricket"));
// answer is 2..

// PROBLEM 3 -- lastIndexOf--
console.log(games.lastIndexOf("Cricket", 3));
// start the counting from last of an array answer is 2

// PROBLEM 4--FILTER ARRAY--
let num = [40, 56, 80, 90, 100, 101, 102, 23, 22];
console.log(num);
 let b = num.filter(checkAge);
 console.log(b);
 function checkAge(sum){
    return sum <= 40;
 }