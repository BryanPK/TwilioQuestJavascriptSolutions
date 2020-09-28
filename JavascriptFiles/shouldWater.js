const input1 = Number(process.argv[2]);
const input2 = Number(process.argv[3]);

function rainMan(input1, input2) {
    if (input1 == 0 && input2 > 10) {
        console.log("WATER");
    }
}
rainMan(input1, input2);