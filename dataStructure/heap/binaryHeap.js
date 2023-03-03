const MaxBinaryHeap = () => {
  const values = [41, 39, 33, 18, 27, 12];

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

  return {
    values,
    insert,
    bubbleUp,
  };
};

const heap = MaxBinaryHeap();
heap.insert(55); // [41, 39, 33, 18, 27, 12, 55]
heap.insert(10); // [41, 39, 33, 18, 27, 12, 55, 10]
heap.insert(35); // [55, 41, 33, 39, 27, 12, 10, 18, 35]
console.log(heap);
