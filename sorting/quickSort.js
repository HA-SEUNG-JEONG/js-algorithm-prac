// function quickSort(arr) {
//   //의사코드
//   //0. 피벗을 정한다. (여기서는 가장 첫번째 요소를 피벗으로 정함)
//   //1. 배열의 가운데에 있는 요소를 고른다.
//   //2. 가운데에 있는 요소보다 작은 값을 가진 요소들은 모두 왼쪽에 둔다.
//   //3. 가운데에 있는 요소보다 큰 값을 가진 요소들은 모두 오른쪽에 둔다.
//   //4. 왼쪽과 오른쪽에 있는 요소들을 각각 재귀적으로 정렬한다.
//   //5. 모든 요소가 정렬되었으면 배열을 반환한다.

//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[0];
//   let left = [];
//   let right = [];

//   arr.forEach((el, i) => {
//     if (i === 0) {
//       return;
//     }
//     if (el < pivot) {
//       left.push(el);
//     } else {
//       right.push(el);
//     }
//   });

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

//퀵 정렬의 실행 시간은 피벗 선택 위치에 따라 달라질 수 있음
//이상적으로는 데이터 중간값이 피벗 위치

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
