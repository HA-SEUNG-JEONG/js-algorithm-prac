//1. 최솟값을 저장할 변수 만들기
//2. 배열의 첫 번째 값을 가장 작은 값으로 설정
//3. 그런 다음 그 다음의 항목과 비교
//4. 그 다음 항목이 더 작을 경우 그 항목을 가장 작은 값으로 갱신
//5. 그렇지 않으면 계속 진행
//6. 저장하려는 것은 값을 찾은 위치 인덱스

function selectionSort(arr) {
  /**
   * It swaps the values of two elements in an array
   * @param arr - the array we're sorting
   * @param idx1 - The index of the first item we want to swap
   * @param idx2 - the index of the second item to swap
   */
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    /* It's finding the index of the lowest value in the array. */
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log("i: ", i, "j: ", j);
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest); //최솟값이 처음에 시작한 값이 아닐 경우 바꾼다.
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10]));

//보통은 O(n^2)
