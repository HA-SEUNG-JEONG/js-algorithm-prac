/**
 * SumRange takes in a number and adds that number to the sum of all the numbers from 1 to that number.
 * @param num - 4
 * @returns 10
 */
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(4));
