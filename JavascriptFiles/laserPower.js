function calculatePower(input) {
    let result = input.reduce((sum, current) => sum + (current*2), 0);
    return result;
}
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower);