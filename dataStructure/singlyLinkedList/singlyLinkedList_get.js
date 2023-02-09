//get 함수는 항상 인덱스(number)를 인자로 받아야 함
// 인덱스가 음수거나 리스트 길이보다 같거나 크면 동작 X -> null or undefined 리턴

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
    /* If there is no head, then the head and tail are the same. */
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      /* 새로운 노드를 만들고, 그 노드를 list의 tail이 가리키도록 함 */
      this.tail.next = newNode; //tail이 가리키고 있는 마지막 노드의 next가 새로운 노드를 가리키도록 함
      this.tail = newNode; //list의 tail이 새로운 노드를 가리키도록
    }
    this.length++;
    return this;
  }
  get(index) {
    /* This is checking to see if the index is out of bounds. If it is, then we return undefined. */
    if (index < 0 || index >= this.length) return undefined; //index가 음수거나 리스트 길이보다 같거나 크면 undefined
    let counter = 0; //카운터 변수 0으로 초기화
    let current = this.head; //head를 현재 노드로 설정

    /* 위의 코드는 주어진 index에 대한 참조를 얻기 위해 연결 리스트를 순회하는 것이다. */
    while (counter !== index) {
      //counter가 index와 같지 않은 동안에
      current = current.next; //current의 next가 current를 가리키도록 설정
      counter++; //counter 증가
    }
    return current; //current 리턴
  }
}

let list = new SinglyLinkedList();
list.push("HEllo");
list.push("Bye");

console.log(list);
