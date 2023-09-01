// let car = {
//   make: "Jeep",
//   model: "Wrangler",
//   accelerate: function () {
//     return this.model + " drives away";
//   },
//   brake: function () {
//     return this.make + " pulls up";
//   },
// };
// console.log("Car is a " + car.make + "" + car["model"]);
// console.log(car.accelerate());
// console.log(car.brake());

let property,
  car = {
    make: "Jeep",
    model: "Wrangler",
    accelerate: function () {
      return this.model + " drives away";
    },
    brake: function () {
      return this.make + " pulls up";
    },
  };
for (property in car) {
  console.log(property + ": " + car[property]);
}
car.make = "Ford";
car.model = "Bronco";
car.engine = "V6";
car.start = function () {
  return this.make + " motor is running";
};
console.log("\nCar is a " + car.make + "" + car["model"]);
console.log("Engine Type: " + car.engine);
console.log(car.start());
console.log(car.accelerate());
console.log(car.brake());
