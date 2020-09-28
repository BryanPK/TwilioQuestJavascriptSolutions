const input = process.argv[2];

function divideByTwo(input) {
    let convertedNumber = Number(input);
    let result = convertedNumber/2;
    return result;
}

console.log(divideByTwo(input));