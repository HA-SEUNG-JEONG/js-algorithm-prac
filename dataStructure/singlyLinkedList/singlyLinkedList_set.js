//업데이트할 값과 위치를 알려주는 인덱스를 인자로 받아야 함

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //메소드 추가
  push(val) {
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

  get(index) {
    if (index < 0 || index >= this.length) return undefined; //index가 음수거나 리스트 길이보다 같거나 크면 undefined
    let counter = 0; //카운터 변수 0으로 초기화
    let current = this.head; //head를 현재 노드로 설정
    while (counter !== index) {
      //counter가 index와 같지 않은 동안에
      current = current.next; //current의 next가 current를 가리키도록 설정
      counter++; //counter 증가
    }
    return current; //current 리턴
  }
  set(index, value) {
    let foundNode = this.get(index);
    /* Checking to see if the node exists. If it does, it will update the value. */
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
}

let list = new SinglyLinkedList();
list.push("HEllo");
list.push("Bye");
list.push("World");
list.push("!");

console.log(list);
