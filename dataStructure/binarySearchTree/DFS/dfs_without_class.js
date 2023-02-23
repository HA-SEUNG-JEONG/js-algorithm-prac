const Node = (value) => {
  return { value, left: null, right: null };
};

const insert = (root, value) => {
  if (root === null) return Node(value);
  value < root.value
    ? (root.left = insert(root.left, value))
    : (root.right = insert(root.right, value));
  return root;
};

// 만약 값이 현재 노드의 값보다 작으면 왼쪽으로, 크면 오른쪽으로 이동하고, 같으면 현재 노드를 반환합니다.

const findAndReturn = (root, value) => {
  let current = root,
    found = false;
  while (current && !found) {
    if (value < current.value) current = current.left;
    else if (value > current.value) current = current.right;
    else found = true;
  }
  return { current, found };
};

// 값을 찾으면 노드와 true를 반환하고 그렇지 않으면 노드와 false를 반환
const find = (root, value) => {
  const { current, found } = findAndReturn(root, value);
  return found ? current : undefined;
};

// 값이 찾아진다면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
const contains = (root, value) => {
  const { found } = findAndReturn(root, value);
  return found;
};

// 루트 노드의 값을 데이터 배열에 추가한 다음, 왼쪽과 오른쪽 서브트리를 재귀적으로 탐색
// 이진 트리의 노드 값들을 전위 순회(pre - order traversal)하는 순서대로 배열로 반환
const dfsPreOrder = (root) => {
  const data = [];
  let current = root;
  const traverse = (node) => {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(current);
  return data;
};

//왼쪽 서브트리, 오른쪽 서브트리, 그리고 마지막으로 루트 노드를 순회

const dfsPostOrder = (root) => {
  const data = [];
  let current = root;
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.value);
  };
  traverse(current);
  return data;
};

// 왼쪽 서브트리를 먼저 탐색한 후에 루트를 탐색하고, 그 다음에 오른쪽 서브트리를 탐색

const dfsInOrder = (root) => {
  const data = [];
  let current = root;
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    data.push(node.value);
    if (node.right) traverse(node.right);
  };
  traverse(current);
  return data;
};

let tree = null;
tree = insert(tree, 10);
tree = insert(tree, 6);
tree = insert(tree, 15);
tree = insert(tree, 3);
tree = insert(tree, 8);
tree = insert(tree, 20);
console.log(dfsPreOrder(tree)); //[10, 6, 3, 8, 15, 20]
console.log(dfsPostOrder(tree)); //[3, 8, 6, 20, 15, 10]
console.log(dfsInOrder(tree)); //[3, 6, 8, 10, 15, 20]
