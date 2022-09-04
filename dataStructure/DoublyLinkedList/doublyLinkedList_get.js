//index가 0보다 작거나 크거나 this.length와 같으면 null 리턴
// 그렇지 않으면 index가 list 길이의 절반보다 작거나 같은지 확인
// 참이면 처음에서 시작해서 오른쪽으로 가면서 .next 수행
// 거짓이면 index가 리스트 길이보다 크다는 의미

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
  shift() {
    //1. length가 0이면 undefined 리턴
    //2. 0 이상이면 head를 변수에 저장
    //3. 만약 1이면 head와 tail을 null로 설정
    //4. 아니면 head가 이전 head의 next가 되도록 설정
    //5. 그 다음에 head.prev를 null로 설정
    //6. 이전 head.next를 null로 설정
    //7. 길이를 하나 줄이고 이전 head 출력
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //else를 추가안하면 this.length가 1이어도 여기로 넘어옴
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
  get(index) {
    let count = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(8);
