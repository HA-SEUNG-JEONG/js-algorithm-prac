// Optimized BubbleSort with noSwaps

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    //i를 arr.length부터 시작해서 1씩 감소하며 실행
    let noSwaps = true; //noSwaps는 아직 스왑이 일어나지 않았다는 의미
    for (let j = 0; j < i - 1; j++) {
      //j는 0부터 i-1 전까지 실행
      if (arr[j] > arr[j + 1]) {
        //arr[j]보다 arr[j+1]이 크다면
        let temp = arr[j]; //temp는 arr[j]의 값을 넣어준다
        arr[j] = arr[j + 1]; //arr[j]의 값을 arr[j+1]의 값으로 바꾼다
        arr[j + 1] = temp; //arr[j+1]의 값을 temp의 값으로 바꾼다
        noSwaps = false; //스왑이 일어났다는 의미
      }
    }
    if (noSwaps) break; //noSwaps가 true이면 반복문을 빠져나온다
  }
  return arr; //arr을 반환한다
}

console.log(bubbleSort([5, 4, 3, 2, 1]));

//Big O Notation
// Best Case: O(n) //정렬되어 있을 경우
// Worst Case: O(n^2)
