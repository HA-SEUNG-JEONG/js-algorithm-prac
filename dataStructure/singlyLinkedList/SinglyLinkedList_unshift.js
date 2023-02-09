// 새로운 head를 리스트 앞에 추가하고 새로운 head가 이전 head를 가리키게 하기

// push와 마찬가지로 새로운 노드 만들기

// 헤드가 없으면 헤드와 테일 모두 새로운 노드를 가리키도록

// 노드가 있으면 새롭게 생성된 노드의 next를 현재의 헤드값으로 설정

//  헤드가 새롭게 생성된 노드를 가리키도록 한 다음 리스트 길이를 1 증가시키고 마지막으로 연결 리스트 반환

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    // 연결 리스트의 앞에서 노드를 제거
    // 현재 head가 가리키고 있는 노드를 제거 -> head를 head가 가리키고 있던 리스트의 두 번째 노드를 가리키도록 설정

    // 노드가 없을 경우 undefined 반환, 존재하면 현재의 head를 변수에 저장
    // 현재 head의 next 노드를 가리키도록 head 업데이트
    if (!this.head) undefined;

    let current = this.head;
    this.head = this.head.next;
    this.length--;
    //this.length가 0인 경우 처리
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      //head가 비어있으면 head tail 같음
      this.head = newNode;
      this.tail = this.head;
    } else {
      //새롭게 생성된 노드의 next를 현재의 헤드값으로 설정
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

console.log(list);
