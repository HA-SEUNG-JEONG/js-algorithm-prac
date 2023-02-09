// 방문한 vertex를 저장할 객체 만들기

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
    //최종 결과를 저장할 리스트와 방문한 정점을 저장할 객체 만들기
    const result = [];
    const visited = {};

    const adjacencyList = this.adjacencyList;

    //정점을 입력하는 helper function
    (function dfs(vertex) {
      if (!vertex) return null; //정점이 없는 경우는 null 리턴
      visited[vertex] = true; //해당 정점을 방문 처리
      result.push(vertex); //result에 vertex 집어넣기
      adjacencyList[vertex].forEach((neighbor) => {
        //방문한 적이 없으면 dfs 재귀 호출
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start); //괄호로 감싸면 익명의 함수 표현식이 됨

    return result;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.depthFirstRecursive("A");
graph.depthFirstRecursive("B");
console.log(graph);

//    A
//  /  \
// B    C
// |    |
// D -- E

//순서 : ['A', 'B', 'D', 'C', 'E']
