let input = process.argv[2];
function getLaserSetting(input) {
    if (input === "please") {
        return "OFF";
    } else {
        return "ON";
    }
}
console.log("The current laser setting is: " + getLaserSetting(input));