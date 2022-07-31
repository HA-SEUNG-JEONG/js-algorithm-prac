// Recursive Version
/**
 * If the number is less than or equal to zero, print "All done!" and return. Otherwise, print the
 * number, decrement the number, and call the function again.
 * @param num - 3
 * @returns undefined
 */
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Iterative Version
/**
 * CountDown(num) takes in a number and counts down from that number to 1, then prints "All done!"
 * @param num - the number we want to count down from
 */
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
