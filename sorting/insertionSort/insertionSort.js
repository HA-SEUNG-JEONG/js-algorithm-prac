//첫번째 값은 이미 정렬되었다고 가정

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // arr length만큼 순회
    let cur = arr[i]; //두번째 값을 cur에 저장
    let left = i - 1; //배열의 첫번째 인덱스를 left에 저장

    while (left >= 0 && arr[left] > cur) {
      //left가 0 이상이며 arr [left]가 cur보다 큰 동안에
      arr[left + 1] = arr[left]; // arr[left+1]을 arr [left]으로 저장
      arr[left] = cur; // arr[left]을 cur로 저장
      cur = arr[left]; //cur을 arr [left]으로 저장
      left--; //left를 하나 줄임
    }
  }
  return arr; //array를 반환
}
console.log(insertionSort([2, 1, 9, 76, 4]));
