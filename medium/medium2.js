//--------------------------04/26/22-------------------------------

/**
Exercise: Node 101 - Medium 2: Read a File
-----------------------------------------------
Write a program that prompts the user to enter a file name, and reads in the contents of the file, 
convert the text to all caps, and prints it out.
Assuming the file file1.txt contains the text: "Hello, I am file 1."

Example output:
--------------------
$ node read_file.js
filename: file1.txt
HELLO, I AM FILE 1.

Trigger an error condition by running the program on a non-existent file. 
Your program should display the error message, and it should display something like:

$ node read_file.js
filename: blah.txt
ENOENT: no such file or directory, open 'blah.txt'

HINT:

There are two Node modules that are part of Node code that will help with this exercise, readline and fs.

The fs module is provides a lot of helpful functionality when working with the file system. 
There are a variety of file related methods, such as readFile() and writeFile() that you will helpful.
The readline module has quite a few helpful methods for reading input. 
In particular, there is the question() method that waits for user input.

:::::::::::::::::::::::::::::::::::::::::::::::::::SOLUTION::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
//1. Import necessary packages for reading user input and user files
const prompt = require('prompt-sync')({sigint: true}); //<-- This is for taking in user input
const fs = require('fs'); //<-- This is for reading files on your local machine

//2. Create a text file with some sample text [SEE medium2.txt]

//3. Prompt user input with edge case that accounts files that don't exist
let userInput = prompt(`Enter The Name of the file you want to see: `);

//4. Create  callback function that accesses the file
let filePath = `/Users/corcoding/Desktop/projects/COR-Web.-Dev-Week-12-04-24-22-to-04-30-22-/medium/${userInput}.txt`;
fs.readFile(`${filePath}`, 'utf-8', (err, data)=> {
    if(err){
        console.log(`
        THIS PRINTS IF YOU ENTER THE WRONG FILE
        --------------------------------------------------------------
        The File You Requested Doesn't Exist in The Medium Directory`);
        console.error(`
        ERROR: ${err}`);
        return
    }
    console.log(`Before ALL CAPS: ${data}\n`);//Returns: Hello, I am file 1
    //5. Convert all the letters in the file to uppercase
    let convert = data.toUpperCase();
    console.log(`In ALL CAPS: ${convert}\n`);
});




