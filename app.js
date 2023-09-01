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

// let jsString = Text; // not, new String( ‘Text’ ).
// let jsNumber = 125000; // not, new Number( 125000 ).
// let jsBoolean = true; // not, new Boolean( true ).
// let jsObject = { firstName: "Mike", lastName: "McGrath" };
// let jsDate = new Date();
// let jsArray = [1, 2, 3];
// let jsRegExp = /ineasysteps/i;
// let jsMath = Math;
// let jsError = new Error("Error!");
// console.log("Date Object: " + jsDate);
// console.log("Locale Date String: " + jsDate.toLocaleString());

let jsArray = new Array(10);
console.log(jsArray[0]);
console.log(jsArray);

let month,
  summer = ["June", "July", "August"];
for (month in summer) {
  if (month !== "") {
    console.log(month + ": " + summer[month]);
  }
}
console.log("Start of Summer: " + summer[0]);
console.log(summer);

let i,
  result,
  boolArray = [];
console.log("Fill Elements...");
for (i = 1; i < 11; i++) {
  boolArray[i] = i % 2 === 0 ? true : false;
  console.log("Element " + i + ": " + boolArray[i]);
}
console.log("Read Elements...");
result = "";
for (i = 1; i < boolArray.length; i++) {
  if (boolArray[i]) {
    result += i + " | ";
  }
}
console.log("True in Elements: " + result);
result = "";
for (i = 1; i < boolArray.length; i++) {
  if (!boolArray[i]) {
    result += i + " | ";
  }
}
console.log("False in Elements: " + result);
