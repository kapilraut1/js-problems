let names = [
  "Ram",
  "Cristiano",
  "Gareth",
  "Natrajverma",
  "Shyam",
  "Henry",
  "Lionel",
  "Sergio",
  "Chhetrii"
];

let house = [];

for (const name of names) {
  if (name.length < 5) {
    house.push("Gryffindor");
  } else if (name.length < 7) {
    house.push("Ravenclaw");
  } else if (name.length < 9) {
    house.push("Slytherin");
  } else {
    house.push("Hufflepuff");
  }
}
console.log(house);
