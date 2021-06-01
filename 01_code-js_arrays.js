/**
 * Code along lesson material for JS Arrays
 */

const aNewArray = ["Morgan", "Raul", "Miki", 2, false, NaN];

const concatArray = aNewArray.concat([1, 2, 7]);
console.log(concatArray.length);
console.log(concatArray);

for (element of aNewArray) {
  //let element = aNewArray[i];
  console.log(element);
}

console.log(aNewArray);

aNewArray.push("cappucino");
aNewArray.unshift("caffé");

console.log(aNewArray.length);
console.log(aNewArray);

aNewArray.pop();
aNewArray.shift();
console.log(aNewArray.length);
console.log(aNewArray);

/*
for (let i = 0; i < aNewArray.length; i++) {
  let element = aNewArray[i];
  console.log(element);
}
*/
