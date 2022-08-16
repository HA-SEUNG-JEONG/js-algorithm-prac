function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    //array length만큼 순회
    let cur = array[i]; //두번째 값을 cur에 저장
    let left = i - 1; //배열의 첫번째 인덱스를 left에 저장

    while (left >= 0 && array[left] > cur) {
      console.log("i", i);
      //left가 0 이상이며 array[left]가 cur보다 큰 동안에
      array[left + 1] = array[left]; //array[left+1]을 array[left]으로 저장

      array[left] = cur; //array[left]을 cur로 저장
      cur = array[left]; //cur을 array[left]으로 저장
      console.log("array", array);
      left--; //left를 하나 줄임
    }
  }
  return array; //array를 반환
}
console.log(insertionSort([2, 1, 9, 76, 4]));
