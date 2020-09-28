let input = process.argv[2];
input.toString();

function construct(input) {
    let person = {
        name: input,
        material: "human",
        assemble: true,
        duration: 1000
    };
    return person;
}