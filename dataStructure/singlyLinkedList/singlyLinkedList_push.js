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
    /* If the list is empty, then the head and tail are the same. */
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      /* Adding a new node to the end of the list. */
      this.tail.next = newNode; //tail이 가리키고 있는 마지막 노드의 next가 새로운 노드를 가리키도록 함
      this.tail = newNode; //list의 tail이 새로운 노드를 가리키도록
    }
    /* Incrementing the length of the list. */
    this.length++;
    return this;
  }
  traverse() {
    //새로운 tail을 찾는 작업
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("HEllo");
list.push("Bye");

console.log(list);
