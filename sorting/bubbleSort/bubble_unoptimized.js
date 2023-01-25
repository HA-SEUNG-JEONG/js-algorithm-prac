// // UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//   for(var i = arr.length; i > 0; i--){
//     for(var j = 0; j < i - 1; j++){
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// ES6 이전 버전에서는 선형 시간(linear time)에 더 가까움
function bubbleSortnoSwaps(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      if (noSwaps) break;
    }
    return arr;
  }
}

// ES2015 Version

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
