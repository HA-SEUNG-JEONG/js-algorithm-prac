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
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //head.prev가 newNode가 되도록 설정
      this.head.prev = newNode;
      //새로운 노드의 next가 현재 head가 되도록 설정
      newNode.next = this.head;
      //head를 옮겨서 새로운 노드가 head가 되도록 설정
      this.head = newNode;
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
  set(index, val) {
    //함수에 입력된 index 값을 넣은 get 메소드의 결과값을 받는 변수를 만들어준다.
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    //index가 유효한지 검사
    //0보다 작거나 this.length보다 크면 false 리턴
    //index가 0이면 unshift 수행
    //index가 this.length랑 같으면 push
    //그렇지 않으면 get 메소드를 사용해서 삽입하려고 하는 값의 바로 전에 오는 값에 접근해야 함
    // 그리고 나서 next와 prev 프로퍼티를 사용해서 노드 연결
    //길이 하나 늘리고 나서 this 리턴
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    //newNode의 왼쪽부분
    prevNode.next = newNode;
    nextNode.prev = prevNode;
    //newNode의 오른쪽부분
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    //get 메소드 사용
    //index가 0보다 작거나 길이보다 크면 undefined
    //index 0이면 shift 수행
    //this.length-1과 같으면 pop 수행
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return this.removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(5);
