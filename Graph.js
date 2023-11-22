class Graph {
    constructor() {
        this.nodes = new Map()
    }
    
    addNode(node) {
        console.log(this.nodes.set(node, []))

    }
    
    addEdge(source, destination) {
        this.nodes.get(source).push(destination)
        this.nodes.get(destination).push(source)
        console.log(this.nodes.get(source).push(destination), this.nodes.get(destination).push(source))
    }
    
    removeNode(node) {
        let neighbors = this.nodes.get(node);

        for (let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
        }

        this.nodes.delete(node);
    }

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    removeEdge(source, destination) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    }

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    breadthFirstSearch(startingNode) {
        let visitedNode = [];
        let queue = [];

        visitedNode[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();

            console.log("Current Value",currentNode);

            const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

            for (let node of adjacencyListOfCurrentNode) {
                if (!visitedNode[node]) {
                    visitedNode[node] = true;
                    queue.push(node);
                }
            }
        }
    }

    depthFirstSearch(startingNode) {
        let visitedNode = [];
        this.dfsRecursion(startingNode, visitedNode);
    }
    
    dfsRecursion(currentNode, visitedNode) {
        visitedNode[currentNode] = true;

        console.log("Current Value",currentNode);

        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

        for (var node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }

    hasPath(graph, source, destination) {
        if (source === destination) return true;
        for (let neighbor of graph[source]) {
            console.log(
                neighbor
            )
            if (this.hasPath(graph, neighbor, destination)) {
                return true;
            }
        }
        return false;
    }

}

let graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
// graph.addEdge(1, 2);
// graph.addEdge(1, 4);
graph.addEdge(2, 4);

graph.breadthFirstSearch(0);
// graph.depthFirstSearch(0);
// console.log('====================================');
// console.log(graph.hasPath(graph, 0, 3));
// console.log('====================================');


