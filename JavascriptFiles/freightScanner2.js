let userInput = process.argv.slice(2);

function scan(input) {
    let newArray = [];
    let outputArray = [];
    for (const x in input) {
        if (input[x].toLowerCase() == "contraband") {
            newArray.push(x);
        }
    }
    for (const y in newArray) { //the straw that breaks the fucking camel's back.
        outputArray[y] = parseInt(newArray[y]);
    }
    return outputArray;
}
console.log("Contraband found at: " + scan(userInput));