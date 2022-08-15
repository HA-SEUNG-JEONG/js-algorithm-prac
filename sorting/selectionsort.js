//1. 최솟값을 저장할 변수 만들기
//2. 배열의 첫 번째 값을 가장 작은 값으로 설정
//3. 그런 다음 그 다음의 항목과 비교
//4. 그 다음 항목이 더 작을 경우 그 항목을 가장 작은 값으로 갱신
//5. 그렇지 않으면 계속 진행
//6. 저장하려는 것은 값을 찾은 위치 인덱스

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);

    console.log("arr", arr);
    console.log("**********************");
    console.log(arr);
    console.log("SWAPPING TO: ");

    console.log(arr);
    console.log("**********************");
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
