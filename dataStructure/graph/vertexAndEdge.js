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
  //간선 추가 메소드
  //두 개의 정점을 명시해야 함
  //이 메소드는 adjacencyList에서 vertex1의 키를 찾아서 vertex2를 그 배열에 넣어줘야 함
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex1);
    //undirected 처리
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    //각 정점들의 값에서 상대 정점만 제외해서 반환

    //addVertex 했을 때 그래프에 포함된 정점이 아니면 false 리턴
    if (
      !this.adjacencyList[vertex2].includes(vertex1) ||
      !this.adjacencyList[vertex1].includes(vertex2)
    )
      return false;

    // this.adjacencyList[vertex1] = filter(
    //   (vertex) => vertex !== vertex2,
    //   this.adjacencyList[vertex1]
    // );

    // this.adjacencyList[vertex2] = filter(
    //   (vertex) => vertex !== vertex1,
    //   this.adjacencyList[vertex2]
    // );
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
}

let graph = new Graph();
graph.addVertex("도쿄");
graph.addVertex("미국");
graph.addVertex("홍콩");
graph.addVertex("한국");
graph.addEdge("도쿄", "한국");
graph.removeEdge("도쿄", "홍콩");
console.log(graph);
