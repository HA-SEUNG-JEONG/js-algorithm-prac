/**
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
/**
 * We loop through each element in the first array and check if the squared value exists in the second
 * array. If it exists, we must also check if the number of times it exists is equal to the number of
 * times the number exists in the first array
 * @param arr1 - [1, 2, 3, 2]
 * @param arr2 - [4, 1, 9, 16]
 * @returns the number of times the letter "a" appears in the string.
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1); // remove the element from the array
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
