class Graph {
  constructor() {
    this.adjacencyyList = {};
  }
  addVertex(vertex) {
    //해당 정점에 값이 없다면 빈 배열로 처리
    if (!this.adjacencyyList[vertex]) this.adjacencyyList[vertex] = [];
  }
}
