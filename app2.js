const system = "Windows",
  suite = "Office",
  pattern = /ice/i;
console.log("In " + system + "? " + pattern.test(system));
console.log("In " + suite + "?" + pattern.test(suite));
let result = pattern.exec(suite);
if (result) {
  console.log("Found: " + result + " at " + result.index);
} else {
  console.log("No Match Found");
}
let email = "mike@example";
const format = /.+\@.+\..+/;
console.log(email + " Valid? " + format.test(email));
email += ".com";
console.log(email + " Valid? " + format.test(email));

let obj = {
  category: "Fashion",
  models: [
    { name: "Alice", age: 21, city: "New York" },
    { name: "Kelly", age: 23, city: "Las Vegas" },
  ],
};
let json_obj = JSON.stringify(obj);
console.log(json_obj);
let new_obj = JSON.parse(json_obj);
console.log(new_obj);
console.log(new_obj["category"]);
console.log(new_obj.models[0].name);
console.log(new_obj["models"][1]["name"]);

const promise = new Promise(function (resolve, reject) {
  let random = Math.round(Math.random() * 10);
  if (random % 2 === 0) {
    setTimeout(function () {
      resolve(random);
    }, 1000);
  } else {
    setTimeout(function () {
      reject(random);
    }, 1000);
  }
});
promise
  .then(console.log(promise))
  .then(function (res) {
    console.log(res + " Is Even");
  })
  .catch(function (err) {
    console.log(err + " Is Odd");
  });

// fetch("http://localhost/weekdays.json")
//   .then((response) => response.json())
//   .then((data) => list(data))
//   .catch((err) => console.log(err));
// function list(data) {
//   const values = Object.values(data);
//   let i = 0;
//   while (i < values.length) {
//     console.log(values[i]);
//     i++;
//   }
// }
