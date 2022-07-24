//Implement a function called countUniquevalues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniquevalues(arr) {
  let i = 0;
  let j = 1;
  if (arr.length === 0) return 0; //if the array is empty, return 0
  while (j < arr.length) {
    // while j is less than the length of the array
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}
