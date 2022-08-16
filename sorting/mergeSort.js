//합병정렬(정렬된 배열)
// 0개 요소,1개 요소 배열이 이미 정렬되어 있다는 점을 활용
// 큰 배열에서 작은 배열로 분할 정복 방식을 이용한다.

// 0개 요소나 1개 요소가 있는 배열이 될 때까지 분할
// 한 항목 밖에 없고 비어 있다면 합치기

// 빈 배열 생성 후에 각 입력 배열에서 가장 작은 값 확인
// 첫 번째 배열의 값이 두 번째 배열의 값보다 작으면 첫 번째 배열의 값을 결과에 밀어넣고 첫 번째 배열의 다음 값으로 이동
// 첫 번째 배열의 값이 두 번째 배열의 값보다 크면 두 번째 배열의 값을 결과로 밀어 넣고 두 번째 배열의 다음 값으로 이동
// 한 어레이가 소진되면 나머지 모든 값을 다른 어레이에서 밀어 넣기

//어레이가 비어 있거나 하나의 요소가 있을 때까지 어레이를 반으로 나누기
//더 작은 정렬된 배열이 있으면 해당 배열을 다른 정렬된 배열과 병합하여 배열의 전체 길이로 돌아옵니다.
//일단 배열이 다시 병합되면 병합된(그리고 정렬!) 배열을 반환한다.

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  // 남은 요소들을 모두 넣어준다.
  while (arr1.length) {
    result.push(arr1.shift());
  }
  while (arr2.length) {
    result.push(arr2.shift());
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log("1", mergeSort(left));
  console.log("******************************");
  console.log("2", mergeSort(right));
  console.log("******************************");
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 1, 9, 76, 4]));

//Big O Notation
//Best : O(n log n)
//Worst : O(n log n)
//Average : O(n log n)
//Space : O(n)
