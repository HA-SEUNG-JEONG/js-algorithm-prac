class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function checkLocation(value, current, newNode) {
  while (true) {
    if (value === current.value) return undefined;
    if (value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    checkLocation(value, current, newNode);
  }
  find(value) {
    //insert에서와 마찬가지로 루트부터 시작
    //루트가 있는지 확인
    //루트가 있으면 새로 만든 노드 값을 보고 찾는 값과 동일한지 확인
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);

//Big O
// Insertion,Searching - O(logn) -> 항상 이렇지는 않음
