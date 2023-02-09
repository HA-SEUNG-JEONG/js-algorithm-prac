class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("here");

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //메소드 추가
  push(val) {
    //주어진 값을 받아들인 후에 그것을 이용해서 새로운 노드 생성
    //head가 없는 경우 리스트가 비어있다는 것을 뜻함
    //리스트가 비어있지 않으면 마지막 노드의 next를 새롭게 생성된 노드를 가리키도록 하기
    // 리스트의 길이도 증가시켜야 함
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; //tail이 가리키고 있는 마지막 노드의 next가 새로운 노드를 가리키도록 함
      this.tail = newNode; //list의 tail이 새로운 노드를 가리키도록
    }
    this.length++;
    return this;
  }
  //   traverse() {
  //     //새로운 tail을 찾는 작업
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }
  pop() {
    //리스트에 아무것도 없을 경우 undefined 리턴
    // 제거하고자 하는 tail에 도달할 때까지 loop
    // 마지막에서 두 번째 노드의 next를 null로 설정
    // tail 값을 마지막에서 두 번째 노드로 업데이트
    // 길이를 하나 감소시키고 제거한 노드를 반환
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      //this가 길이 0이 될 경우 빈 리스트로 설정
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("HEllo");
list.push("Bye");

console.log(list);
