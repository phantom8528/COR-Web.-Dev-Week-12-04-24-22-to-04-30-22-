//--------------------------04/26/22-------------------------------

/**
 * Exercise: Node 101 - Medium 3: Read AND Write to a File
 * -------------------------------------------------------------
 * Write a program to prompt the user for two file names, 
 * the first file will be the input and the second file will be the output. 
 * The program will read in the contents of the input file, convert its text to all caps, 
 * and then write the resulting contents to the output file.

Example Output:
------------------
$ node read_and_write_file.js
Input file: file1.txt
Output file: output.txt
Wrote to file output.txt
As a result, output.txt should now contain the text HELLO, I AM FILE 1

Trigger an error by running the program with an non-existing input file, ensure that the error is 
properly displayed. 
Trigger an error by running the program with an output file in a non-existant directory, 
such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

 */

//:::::::::::::::::::::::::::::::::::::::::::::::::::SOLUTION::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//1. Import core modules needed for user input, reading files, and writing to files
let prompt = require('prompt-sync')({sigint: true});
let fs = require('fs'); //<-- used for both reading and writing functionality
//2. Create another file called outputFile.txt (We'll use the medium2.txt file from the previous example)
//3. Prompt the user for two file names
let firstInput = prompt("What is the first file: ");//<-- enter medium2
let secondInput = prompt("What is the second file: "); //<-- enter outputFile
//4. Assign the path the the targetd directory to two variables
let inputFilePath = `/Users/corcoding/Desktop/projects/COR-Web.-Dev-Week-12-04-24-22-to-04-30-22-/medium/${firstInput}.txt`;
let outputFilePath = `/Users/corcoding/Desktop/projects/COR-Web.-Dev-Week-12-04-24-22-to-04-30-22-/medium/${secondInput}.txt`;
//5. Extract the contents of the file indicated in "firstInput"
fs.readFile(`${inputFilePath}`, 'utf-8', (err, data)=> {
    if(err){
        console.log(`
        THIS PRINTS IF YOU ENTER THE WRONG FILE
        --------------------------------------------------------------
        The File You Requested Doesn't Exist in The Medium Directory`);
        console.error(`
        ERROR: ${err}`);
        return
    }
    //---------------------WRITING THE CONTENTS OF THE INPUT FILE TO THE OUTPUT FILE---------------------------
    //6. Write the contents of the file targeted above to the output file targeted below
    fs.writeFile(`${outputFilePath}`, `${data}`, err => {
        if (err){
            console.log('ERROR. UNSUCCESSFUL');
            console.log(err)
        }
        //file written successfully
        console.log(`Successfully wrote ${data} to ./${secondInput}.txt `);
    });
});



