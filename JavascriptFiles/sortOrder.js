let input1 = process.argv[2]; //cat
let input2 = process.argv[3]; //dog
let compare1 = input1.toLowerCase();
let compare2 = input2.toLowerCase();

if (compare1 < compare2 == true) {
    console.log(-1);
} 
if (compare1 == compare2 == true) {
    console.log(0);
} 
if (compare1 > compare2 == true) {
    console.log(1);
}