최대 이진 힙에서는 부모 노드가 항상 자식 노드보다 큰 값을 가짐
하지만 형제 노드들 간에는 보장되지 않음

<img src='https://www.geeksforgeeks.org/wp-content/uploads/MinHeapAndMaxHeap.png' />

최소 이진 힙에서는 그 반대가 성립한다.

이진 탐색 노드와 마찬가지로 각 노드는 언제나 최대 2개의 자식을 갖는다.

하지만 이진 탐색 트리와는 다르게 왼쪽과 오른쪽에는 **순서가 존재하지 않는다.**

n개의 배열이 있다고 했을 때 왼쪽 자식은 `2n+1` 인덱스에 위치해 있고 오른쪽 자식은 `2n+2`에 위치해 있다.

<img src='https://miro.medium.com/max/828/1*4bdpYmlyFJV90tlHvj2mbA.png' />

자식 노드의 위치를 이용해서 부모 노드를 알아낼 수도 있다.

자식 노드가 n 인덱스에 위치해 있다면 부모는 (n-1)/2가 될 것이다.
