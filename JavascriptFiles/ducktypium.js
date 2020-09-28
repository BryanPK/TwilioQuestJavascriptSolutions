class Ducktypium {

    constructor(color) {
        color.toLowerCase();
        if (color != "blue" && color != "red" && color != "yellow") {
            throw new Error("Color must be red, yellow, or blue!");
        } else {
            this.color = color;
        }
        this.calibrationSequence = [];
    }
        

    refract(inputColor) {
        inputColor.toLowerCase();
        if (inputColor != "blue" && inputColor != "red" && inputColor != 'yellow') {
            throw new Error("Color must be red, yellow, or blue");
        }
        if (inputColor === this.color) {
            return inputColor;
        } else if ((this.color == 'red' && inputColor == 'blue') || (this.color == 'blue' && inputColor == 'red')) {
            return "purple";
        } else if ((this.color == 'red' && inputColor == 'yellow') || (this.color == 'yellow' && inputColor == 'red')) {
            return "orange";
        } else {
            return "green";
        }
    }

    calibrate(inputArray) {
        this.calibrationSequence = inputArray.map(x => x * 3).sort((a, b) => a - b);
        return this.calibrationSequence;
    }
}

try {
    const badColor = new Ducktypium('pink');
  } catch(e) {
    console.log('Color must be red, yellow, or blue!');
  }
  
  // Create a new instance of the class
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  console.log(`Ducktypium's color is: ` + dt.color);
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(`Ducktypium's color is: ` + dt.color);
  console.log(dt.refract('red')); // prints 'red'
  console.log(`Ducktypium's color is: ` + dt.color);
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence);