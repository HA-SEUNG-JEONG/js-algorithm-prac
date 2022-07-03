//버블 정렬
// 루프를 돌면서 각 항목을 다음 항목과 비교
// 처음 숫자가 비교 대상 숫자보다 큰 지 확인
// 더 크면 교환하고 아니면 정지

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i + 1]) {
        //교환
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 13, 56]));
