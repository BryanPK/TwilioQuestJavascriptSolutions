function calculateMass(input) {
    let value = input.reduce((sum, current) => sum + current.length, 0);
    return value;
}
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass);