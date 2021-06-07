// PROBLEM 1--intro to arrays-- 

let games = ["Cricket", "Hockey" , "Basketball" , "Football" , "Rugby" ,"Tennis"];
console.log(games);
// in console it is printed by index and the length of array is 6.

// PROBLEM 2 -- ARRAY tranversal--
for (let i = 0; i < games.length ; i++) {
console.log("games "+ (i+1 )+" =  "+ games[i]);
}
// PROBLEM 3 --accessing first and last items in array..
console.log(games[0]);
// as the first item have index 0
console.log(games[5]);
// last item have index 5.

// PROBLEM 4 -- array length--
console.log(games.length);
// length is 6

// PROBLEM 5;-- array toString conversion--
console.log(games.toString());
// printed without inverted commas in console.
 
// PROBLEM 6--UTILITY METHODS--
console.log(games.push("Polo"));
// added at the end of array..
console.log(games.unshift("Bedminton"));
// the length is now 8 and bedminton in the start of an array
// the removal of these games will be as..
console.log(games.pop()); /*polo is removed*/
console.log(games.shift()); /*bedminton is removed*/

// PROBLEM 7 --- splice method--
// to add more than one items to an array by telling the index of 
// these items splice method is used.
console.log(games.splice( 3 , 0 , "Kabbadi" , "Polo"));
// length is 8 and these two items are added in the index of 3 and 4.
// in this function 0 indicates the number of items we want to delete
// from array.