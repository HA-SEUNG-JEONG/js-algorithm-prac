class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //1. 추가할 노드 생성
    //2. head가 null이거나 길이가 0인지 확인
    //3. 그렇다면 head,tail 모두 다 새로 만든 노드로 설정되어야 함
    //4. 그리고 새로 만든 노드의 prev 프로퍼티를 이전 tail로 설정
    //5. 그리고 tail 프로퍼티를 이제 가장 끝에 있게 된 새로운 노드로 이어준다.
    //6. 길이를 1 늘리고 전체 리스트 출력
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    //1. 리스트가 비어있는지 확인
    //2. 그렇다면 undefined를 반환
    //3. 그렇지 않다면 tail을 임시로 저장
    //4. tail을 이전 노드로 설정
    //5. tail의 next를 null로 설정
    //6. 임시로 저장한 tail을 반환
    //7. 길이를 1 줄이고 전체 리스트 출력
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      // 리스트에 노드가 하나밖에 없다면
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // tail을 이전 노드로 설정
      this.tail.next = null; // tail의 next를 null로 설정
      poppedNode.prev = null; // 임시로 저장한 tail의 prev를 null로 설정
    }
    this.length--;
    return poppedNode;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);

console.log(list);
