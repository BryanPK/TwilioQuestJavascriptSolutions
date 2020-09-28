const input = Number(process.argv[2]);
const bool1 = Boolean(input % 3);
const bool2 = Boolean(input % 5);
let output = "";
if (bool1 == false) {
    output += "Java";
}
if (bool2 == false) {
    output += "Script";
} else if (bool1 == true && bool2 == true) {
    output += input;
}

console.log(output);