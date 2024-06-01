// first javascript code

let person = {
  name: "Matt",
  age: 33,
};
person.name = "John";
let selection = "name";
person["name"] = "Mary";
console.log(selection);

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("Matt", "Meinke");
greet("Mary");

function square(number) {
  return number * number;
}

console.log(square(2));
