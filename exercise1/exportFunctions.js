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

//----------------------FOR TESTING ONLY---------------------------
// let names  = ['test1', 'test2', 'test3', 'test4', 'test5'];
//----------------------FOR TESTING ONLY---------------------------

function addZZZ (arr){
    console.log(`\nYou've Successfully Added "ZZZ" to ${arr.length} Names Below:\n`)
    arr.forEach(element => {
        console.log(`${element}zzz\n`);
    });
}
//:::::::::::::::::::::::::::::::EXPORT THE FUNCTION:::::::::::::::::::::::::::::::::::::::::::
module.exports = addZZZ;
