//bineary Search - 정렬 배열에서만 가능
function binarySearch(arr, key) {
  // arr is the array, key is the value we are searching for
  let left = 0; // left is the leftmost index of the array
  let right = arr.length - 1; // right is the rightmost index of the array
  let mid; // mid is the middle index of the array
  while (left <= right) {
    // while the left index is less than or equal to the right index
    mid = Math.floor((left + right) / 2); // mid is the middle index of the array
    if (key < arr[mid]) {
      // if the key is less than the middle index
      right = mid - 1; // right is the middle index - 1
    } else if (key > arr[mid]) {
      // if the key is greater than the middle index
      left = mid + 1; // left is the middle index + 1
    } else {
      return mid; // return the middle index
    }
  }
  return -1; // return -1 if the key is not found
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15)); // 1

//what about Big O?
// O(log n) worst case
// O(1) best case
