const fs = require('fs').promises;

async function readFile(filepath){
    try{
        const data = await fs.readFile(filepath, 'utf-8');
        const lines = data.split(/\r?\n/);
        return decode(lines);
    } catch(error){
        console.error(`Got an error trying to read the files: ${error.message}`)
    }
}

function decode(lines){
    return lines.reduce((totalSum, line)=> totalSum + sumDigits(line), 0);
}

function sumDigits(str){
    const firstDigitStr = str.match(/\d/);
    const lastDigitStr = str.match(/\d(?=[^\d]*$)/);

    return parseInt(firstDigitStr+lastDigitStr);
}

readFile('input.txt').then(result =>{
    console.log(result);
}).catch(error => console.error(error));