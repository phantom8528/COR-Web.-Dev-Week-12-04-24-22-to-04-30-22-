//-----------------------------------04/25/22-------------------------------------

/**
Node Exercise 1 Instructions
-------------------------------
Create a Node application that has a main file and at least 2 other local JavaScript files.
One of the local JavaScript files should export a list of names.
The other local JavaScript file should export a function that prints out a list of names (that can be passed in) with ‘zzz’ added to the end of it.
The main file should import the data and functions from the local JS files you created, then use them to accomplish the task.
For example, if the list of names includes “Troy”, “Martha”, “David”, the output should be “Troyzzz”, “Marthazzz”, “Davidzzz” (edited) 
 */


//::::::::::::::::::::::::::::::::SOLUTION::::::::::::::::::::::::::::::::::::::
const addZZZ = require('./exportFunctions');//<-- adds ZZZ to the end of every string item in an array
const names = require('./exportNames');//<-- provides an array with names in inside

addZZZ(names);//<-- Call the addZZZ


/**
 * Returns:
---------------------
name1zzz
name2zzz
name3zzz
name4zzz
name5zzz
 */

//::::::::::::::::::::::::::::::::EXPERIMENT 2::::::::::::::::::::::::::::::::::::::
//Dynamically inputting the names with user input while in the main.js
//-------------------------------------------------------------------------------

// let dynamicArray = [];

// const prompt = require('prompt-sync') ({sigint: true});

// let numberOfNames = prompt("How names would you like to enter? --> ");

// let i = parseInt(numberOfNames);

// let x = 0;
// while (x < i){
//     let userInput = prompt("Enter The Names you Want to See: ")
//     dynamicArray.push(userInput);
//     x++
// }
// addZZZ(dynamicArray);








