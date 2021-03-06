export { };

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: any, valueToRemove: any): any {
  const arrCopy = [...arr];
  const index = arrCopy.indexOf(valueToRemove);
  arrCopy.splice(index, 1);
  return arrCopy;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];


const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);
console.log(numbers);
console.log(names);

/*
  Expected output:

      [1, 3]
      [John, Alice]
*/
