function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //교환하기
        let temp = arr[j]; //임시변수에 저장
        arr[j] = arr[j + 1]; //임시변수에 저장된 값을 다음 자리에 저장
        arr[j + 1] = temp; //임시변수에 저장된 값을 이전 자리에 저장
      }
    }
  }
  return arr;
}

console.log(bubbleSort([83, 12, 2, 4, 3, 43, 5, 6, 72]));
