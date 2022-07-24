// Write a function caleld maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements

function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (i < n - 1) {
      //if the index is less than n-1, keep adding to the tempSum
      continue;
    } else {
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
      tempSum -= arr[i - n + 1];
    }
  }
  return maxSum;
}
