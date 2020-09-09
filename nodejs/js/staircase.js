/**

Print  like below

   *
  **
 ***
****

let str1 = "#";

const n = 4;

for (let i = 0; i < n; i++) {
  console.log(i, str1.padStart(n, " "));
  str1 = str1.concat("#");
}
*/

/**
 * find the number of maximum numbers
 */

let arr0 = [999];

for (let j = 0; j < 99999; j++) {
  arr0.push(1000);
}

console.log(arr0);

//arr0 = [3, 3, 3, 1, 3];

let arr1 = arr0.sort((a, b) => a - b).reverse();

let max;
let noOfMax;

if (arr1.length > 1) {
  max = arr1[0];
  noOfMax = 1;
}

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] == max) {
    noOfMax += 1;
  }
}

console.log(noOfMax);
