const MaxBinaryHeap = () => {
  const values = [];

  const insert = (element) => {
    values.push(element);
    bubbleUp();
  };

  const bubbleUp = () => {
    let idx = values.length - 1;
    const element = values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = values[parentIndex];
      if (element <= parent) break;
      values[parentIndex] = element;
      values[idx] = parent;
      idx = parentIndex;
    }
  };

  const sinkDown = () => {
    let idx = 0;
    const length = values.length;
    const element = values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = null,
        rightChild = null;
      swap = null;

      if (leftChildIdx < length && leftChild > element)
        leftChild = values[leftChildIdx];

      if (
        rightChildIdx < length &&
        rightChild > element &&
        rightChild > leftChild
      )
        rightChild = values[rightChildIdx];

      if (swap === null) break;

      // values[idx] = values[swap];
      // values[swap] = element;
      // idx = swap;
    }
  };

  const extractMax = () => {
    const max = values[0];
    const end = values.pop();
    if (values.length > 0) {
      values[0] = end;
      sinkDown();
    }

    return max;
  };

  const toArray = () => [...values];

  return {
    values,
    insert,
    bubbleUp,
    extractMax,
    toArray,
  };
};

const heap = MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
