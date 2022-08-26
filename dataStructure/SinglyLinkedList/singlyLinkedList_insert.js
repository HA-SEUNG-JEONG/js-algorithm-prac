//인덱스와 값을 받음
//만약 인덱스가 0보다 작거나 리스트 길이보다 크면 false 리턴
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

  pop() {
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
  insert(index, val) {
    if (index < 0 || index > this.length) return false; //만약 인덱스가 0보다 작거나 리스트 길이보다 크면 false 리턴
    if (index === this.length) return Boolean(this.push(val));
    if (index === 0) return Boolean(this.unshift(val));

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("HEllo");
list.push("Bye");
list.push("World");
list.push("!");

console.log(list);
