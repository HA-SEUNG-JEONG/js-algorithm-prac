### Graph

유한하고 변할 수 있는 점이나 노드나 점들의 집합으로 구성된 데이터 구조
즉, 노드나 노드들의 연결을 모은 것

그래프는 SNS,구글맵,파일 시스템 등등에 활용되고 있다.

정점(vertex) - 노드
간선(edge) - 노드 사이의 연결

undirected graph - 양방향 연결 그래프
directed graph - 하나의 연결만 있음

weighted graph - 간선에 부여된 값이 존재하는 그래프
unweighted grpah - 간선에 부여된 값이 없는 그래프

### Adjacency Matrix

![](https://velog.velcdn.com/images/gktmd652/post/b8378c9a-598c-4291-abf8-1fcb499a7442/image.png)

보통 중첩 배열로 저장, `0과 1`을 쓰거나 `true/false`를 사용할 수도 있다.

### Adjacency List

![](https://velog.velcdn.com/images/gktmd652/post/32eb920c-6fa5-4641-a981-8ffeeb855cc1/image.png)

보통은 이렇게 순서대로 있을수도 있지만 노드가 `number`가 아닐수도 있을 것이고 노드 사이에 갭이 엄청나게 클 경우도 있을 것이다.
이 때는 `해시 테이블`을 사용하면 된다.

### Adjacency Matrix vs Adjacency List

인접 리스트는 간선이 많지 않고 퍼져있는 그래프에서는 인접 행렬보다 더 적은 공간을 차지한다.
하지만 특정 간선이 존재하는 것을 확인하려면 인접 행렬보다는 느린 편이다.

반면 인접 행렬은 간선을 확인하고 싶은 경우 모든 간선에 대해서 루프를 돌아 찾아야 한다.

트리와는 다르게 그래프를 순회하는 코드를 짤 때는 시작점을 지정해줘야 한다.
