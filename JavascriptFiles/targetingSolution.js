class TargetingSolution {

    constructor(objectLit) {
        this.x = objectLit.x;
        this.y = objectLit.y;
        this.z = objectLit.z;
    }

    target() {
        let string = "(" + this.x + ", " + this.y + ", " + this.z + ")";
        return string;
    }
}
const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
  });
  
  console.log(m.target());