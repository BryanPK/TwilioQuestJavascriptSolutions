let input = Number(process.argv[2]);

function detectLife(input) {
    if (input == 0) {
        console.log("alive");
    } else{
        console.log("other");
    }
}

detectLife(input);