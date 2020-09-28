let input = process.argv.slice(2);

function scan(freightItems) {
    let contrabandCount = 0;
    for (const x of freightItems) {
        if (x.toLowerCase() == "contraband") {
            contrabandCount++;
        }
    }
    return contrabandCount;
}
console.log("contraband spotted: " + scan(input));
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);