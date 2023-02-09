//insert 메소드 작성하고 숫자 추가
//최대 힙에 만족할 때까지 버블 업 진행

//Bubble Up
//이 메소드는 values 리스트 또는 배열의 맨 뒤에 값을 push 한 다음 실행되어야 함
//마지막 요소를 가져와서 부모의 자리 찾기
// 그럼 이제 해당 인덱스 값과 맨 뒤의 값을 비교
// 어느 것이 더 큰지 확인,
//추가한 게 더 크다면 swap

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);

//[41, 39, 33, 18, 27, 12, 55];
//[41, 39, 55, 18, 27, 12, 33];
//[55, 39, 41, 18, 27, 12, 33]; break
