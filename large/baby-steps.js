// console.log(process.argv);

// let commandLineInput = process.argv.slice(2);
// console.log(commandLineInput);

function cliAddition (arr){
    let x = 0;
    for (i in arr){
        x = x + parseInt(arr[i]);
        i++
    }
    console.log(x)
}
cliAddition(process.argv.slice(2));
// console.log(`The length of this array is ${process.argv.slice(2).length}`);
// console.log('The Sum Is: '+ cliAddition(process.argv.slice(2)));

// let filtered = test.filter(item => item[0]);
// console.log(test);
// console.log(filtered.length);

