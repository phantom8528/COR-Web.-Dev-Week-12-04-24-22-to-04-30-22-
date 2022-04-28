//SEE make-it-modular.js first
//:::::::::::::::::::::::::::::::::::::::SOLUTION::::::::::::::::::::::::::::::::::::
const fs = require('fs');
const path = require('path');
const cliDir = process.argv.slice(2);


module.exports = function fileAndFilter (input, callback){
    const [dir,ext1] = input;
    fs.readdir(`${dir}`, (err, files)=> {
        let result = path.isAbsolute(dir);
        if(result != true){
            callback(new Error("This is not a valid directory"));
            return;
        }
        files.filter((file)=> {
            return path.extname(file) === '.' + ext1;
        }).forEach((file)=> {
            console.log(file);
        });

    });


}

// let callback = (err) => {
//     console.log(`Somthing is Wrong: ${err}`);
// }

// fileAndFilter(cliDir);

