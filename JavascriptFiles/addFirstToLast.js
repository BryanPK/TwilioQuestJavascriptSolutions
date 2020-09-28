let array = process.argv.slice(2);

function addFirstToLast(array) {
    let firstPlusLast = "";
    if (array.length > 0) {
        firstPlusLast = array[0] + array[array.length - 1];
    }
    return firstPlusLast;
}

console.log(addFirstToLast(array));