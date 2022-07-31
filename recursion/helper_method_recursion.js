/**
 * We are creating a new array called result, and then we are calling a helper function that takes in
 * an array as an argument. The helper function will check if the length of the array is 0, and if it
 * is, it will return. If the length of the array is not 0, it will check if the first element of the
 * array is odd, and if it is, it will push it into the result array. Then it will call itself, passing
 * in the array minus the first element
 * @param arr - [1,2,3,4,5,6,7,8,9]
 * @returns [1,3,5,7,9]
 */
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
