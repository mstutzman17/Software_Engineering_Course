class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {

    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {

    for (let node of vertexArray){

      this.addVertex(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {

    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {

    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {

    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, visited = new Set()) {

    visited.add(start);
    console.log(start.value);

    for (let neighbor of start.adjacent) {

      if (!visited.has(neighbor)) {

        this.depthFirstSearch(neighbor, visited);
      }
    }

    return visited;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {

    const visited = new Set();
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {

      const node = queue.shift();
      console.log(node.value);

      for (let neighbor of node.adjacent) {

        if (!visited.has(neighbor)) {

          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return visited;
  }
}

let graph = new Graph()

let a = new Node("A")
let b = new Node("B")
let c = new Node("C")
let d = new Node("D")

graph.addVertices([a,b,c,d])

graph.addEdge(a, b)
graph.addEdge(a, c)
graph.addEdge(b, d)
graph.addEdge(c, d)

graph.removeEdge(b,a)
graph.removeEdge(c,d)

graph.removeVertex(c)
graph.removeVertex(d)

let graph2 = new Graph()
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph2.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph2.addEdge(S, P);
graph2.addEdge(S, U);

graph2.addEdge(P, X);
graph2.addEdge(U, X);

graph2.addEdge(P, Q);
graph2.addEdge(U, V);

graph2.addEdge(X, Q);
graph2.addEdge(X, Y);
graph2.addEdge(X, V);

graph2.addEdge(Q, R);
graph2.addEdge(Y, R);

graph2.addEdge(Y, W);
graph2.addEdge(V, W);

graph2.addEdge(R, T);
graph2.addEdge(W, T);

// this is one option:
graph2.depthFirstSearch(S)
graph2.breadthFirstSearch(S)