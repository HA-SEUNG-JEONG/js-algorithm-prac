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

const find = (root, value) => {
  if (root === null) return false;
  switch (value) {
    case value === root.value:
      return true;
    case value < root.value:
      return find(root.left, value);
    default:
      return find(root.right, value);
  }
};

const bfs = (root) => {
  if (root === null) return [];

  const queue = [root];
  const data = [];

  //배열이 비어있을 때도 true로 되기 때문에 루프가 계속 돈다.
  while (queue.length) {
    const node = queue.shift();
    data.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return data;
};

//         10
//     6       15
// 3       8       20

let root = null;
root = insert(root, 10);
root = insert(root, 6);
root = insert(root, 15);
root = insert(root, 3);
root = insert(root, 8);
root = insert(root, 20);
console.log(bfs(root));
