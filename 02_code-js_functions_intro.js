/**
 * Code along lesson material for JS Funtions
 */
const peopleILike = ["Marco", "Fede", "Sebas", "Fran"];

function sayHola(person) {
  //We don't have a value yet
  return `Hola ${person}!`;
}

function capuccino() {
  return "Ciao!";
}

for (chicoa of peopleILike) {
  // Now we do have a value
  console.log(sayHola(chicoa));
}

console.log(peopleILike);
