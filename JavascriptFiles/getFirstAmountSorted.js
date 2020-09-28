let inputArray = process.argv.slice(2);

function getFirstAmountSorted(inputArray, numberOfItems) {
    let outputArray = inputArray;
    outputArray.sort();
    outputArray.slice(numberOfItems);
    return outputArray;
}