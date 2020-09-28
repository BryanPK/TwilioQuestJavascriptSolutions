function mutate(input) {
    let mutatedItems = [];
    input.map(item => mutatedItems.push(item.toUpperCase()));
    return mutatedItems;
}
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log(mutated);