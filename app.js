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

// let month,
//   summer = ["June", "July", "August"];
// for (month in summer) {
//   if (month !== "") {
//     console.log(month + ": " + summer[month]);
//   }
// }
// console.log("Start of Summer: " + summer[0]);
// console.log(summer);

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

let seasons = ["Spring", "Summer", "Fall", "Winter"];
console.log("Elements: " + seasons);
console.log("Joined: " + seasons.join(" & "));
console.log("Popped: " + seasons.pop());
console.log("Elements: " + seasons);
console.log("Pushed: " + seasons.push("Winter"));
console.log("Elements: " + seasons);
console.log("Sliced: " + seasons.slice(1, 3));
console.log("Spliced: " + seasons.splice(2, 1, "Autumn"));
console.log("Elements: " + seasons);

let hues = ["Red", "RED", "red", "Green", "Blue"];
let nums = [1, 20, 3, 17, 14, 0.5];
console.log("Colors: " + hues);
console.log("Dictionary Sort: " + hues.sort());
console.log("\nNumbers: " + nums);
console.log("Dictionary Sort: " + nums.sort());
console.log("Numerical Sort: " + nums.sort(sortNums));
console.log("Reversed Sort: " + nums.reverse());
function sortNums(numOne, numTwo) {
  return numOne - numTwo;
}

// const now = new Date();
// let offset = now.getTimezoneOffset();
// let dst = 60;
// if (now.getMonth() < 3 && now.getDate() < 10) {
//   dst = 0;
// }
// if (now.getMonth() > 9 && now.getDate() > 2) {
//   dst = 0;
// }
// switch (offset) {
//   case 300 - dst:
//     offset = "East Coast";
//     break;
//   case 360 - dst:
//     offset = "Central";
//     break;
//   case 420 - dst:
//     offset = "Mountain";
//     break;
//   case 480 - dst:
//     offset = "Pacific";
//     break;
//   default:
//     offset = "All";
// }
// console.log("System Time: " + now.toString());
// console.log("UTC (GMT) Time: " + now.toUTCString());
// console.log("\nWelcome to " + offset + " Visitors");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let dayNumber = now.getDate();
let dayName = now.getDay();
month = months[month];
dayName = days[dayName];
let usDate = dayName + ", " + month + "" + dayNumber + ", " + year;
let ukDate = dayName + ", " + dayNumber + "" + month + ", " + year;
console.log("U.S. Date: " + usDate);
console.log("U.K. Date: " + ukDate);
