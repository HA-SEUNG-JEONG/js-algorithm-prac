function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log(arr);
    console.log("**********************");
    console.log(arr);
    console.log("SWAPPING TO: ");
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    console.log(arr);
    console.log("**********************");
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
