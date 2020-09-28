function scanAndFilter(input, filter) {
    let filteredItems = [];
    for (const x of input) {
        if (x.toLowerCase() != filter) {
            filteredItems.push(x);
        }
    }
    console.log(filteredItems);
    return filteredItems;
}
//console.log(scanAndFilter(userInput, userFilter));
const cargo = ['penis', 'dog', 'penis', 'dog', 'PENIS', 'cat'];
console.log(scanAndFilter(cargo, "penis"));