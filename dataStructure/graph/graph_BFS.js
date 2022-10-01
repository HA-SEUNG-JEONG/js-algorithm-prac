const filter = (f, iter) => {
  let result = [];
  for (const item of iter) {
    if (f(item)) result.push(item);
  }
  return result;
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //해당 정점에 값이 없다면 빈 배열로 처리
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex1);
    //undirected 처리
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  contains(vertex) {
    return Object.keys(this.adjacencyList).includes(vertex) ? true : false;
  }
  removeEdge(vertex1, vertex2) {
    //각 정점들의 값에서 상대 정점만 제외해서 반환

    //addVertex 했을 때 그래프에 포함된 정점이 아니면 false 리턴
    if (!this.contains(vertex1) || !this.contains(vertex2)) return false;

    this.adjacencyList[vertex1] = filter(
      (vertex) => vertex !== vertex2,
      this.adjacencyList[vertex1]
    );

    this.adjacencyList[vertex2] = filter(
      (vertex) => vertex !== vertex1,
      this.adjacencyList[vertex2]
    );
  }
  removeVertex(vertex) {
    if (!this.contains(vertex)) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  //큐 만들고 정점 넣기
  // 방문 처리를 한 데이터를 저장할 배열 만들기
  // 방문 처리된 데이터도 가지고 있어야 함, 이후에 방문처리
  // 큐에 값이 들어있는 동안에 큐의 맨 앞에 있는 첫번째 정점을 shift

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      //   console.log("queue", queue);
      currentVertex = queue.shift(); //첫번째 노드 제거한 다음
      result.push(currentVertex); //result에 넣기

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]
