//vaiable

var color = "red";
let age = 30;
age = 40;
color = "green";
console.log(color);

//constant
const pi = 3.14;
console.log(pi);

let name = "John";

let cats = true;
let color2 = null;
let list;
console.log(name, age, cats);

//Array literals
//In const we can't reassign but we can muted/change

const number = new Array(1, 2, 3, 4);
number[2] = 5;
console.log(number[2]);

//another way

const color1 = ["red", "blue", "green"];

color1.push("flue");
let lastColor = color1.pop();
console.log(color1);
console.log(color1.indexOf("flue"));

//array can store different datatypes

const myArray = ["red", 4, "Blue", true];
console.log(myArray);

//Object literals

const person = {
  firstName: "rahul",
  lastName: "chauhan",
  age: 30,
  pets: ["dogs", "cats"],
  address: {
    state: "maharashtra",
    city: "nagpur",
  },
};

person.email = "Rahul@gmail.com";

//dot notation
console.log(person.firstName);

//bracet notation
console.log(person["firstName"]);

console.log(person);

//pulling from object
const { firstName, lastName } = person;

console.log(firstName);

//Array of object

const person1 = [
  {
    name: "Sam",
    location: "mumbai",
  },
  {
    name: "john",
    location: "pune",
  },
];

const personJSON = JSON.stringify(person1);
console.log(personJSON);

console.log(JSON.parse(personJSON));

//function

function hello() {
  console.log("Hello");
}

hello();
