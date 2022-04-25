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


let names  = ['name1', 'name2', 'name3', 'name4', 'name5'];
//:::::::::::::::::::::::::::::::EXPORT NAMES:::::::::::::::::::::::::::::::::::::::::::
module.exports = names
