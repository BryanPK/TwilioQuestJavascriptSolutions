let target = process.argv[2];
target.toString();

class Materializer {
    constructor(target) {
        this.target = target;
        this.activated = false;
    }
    activate() {
        this.activated = true;
        return this.activated;
    }
    materialize() {
        if (this.activated == true) {
            return this.target;
        } else {
            return undefined;
        }
    }
}
/**
const m = new Materializer('Kevin');
console.log(m.activated);
console.log(m.activate());
console.log("Prior should be true");
console.log(m.materialize());
*/