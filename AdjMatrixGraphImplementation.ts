// ==============================Graph Using Map =========================================//

class Graph {
    private nodes: any;
    constructor() {
        this.nodes = new Map()
    }

    addNode(node: number) {
        console.log(this.nodes.set(node, []))

    }

    addEdge(source: number, destination: number) {
        this.nodes.get(source).push(destination)
        this.nodes.get(destination).push(source)
    }

    removeNode(node: number) {
        let neighbors = this.nodes.get(node);

        for (let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
        }

        this.nodes.delete(node);
    }

    getIndexAndRemoveItem(item: number, list: any) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    removeEdge(source: number, destination: number) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    }


    breadthFirstSearch(startingNode: number) {
        let visitedNode = [];
        let queue = [];

        visitedNode[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentNode: any = queue.shift();

            console.log("Current Value", currentNode);

            const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

            for (let node of adjacencyListOfCurrentNode) {
                if (!visitedNode[node]) {
                    visitedNode[node] = true;
                    queue.push(node);
                    if (queue[node] == startingNode){
                        return true;
                    }
                }
            }
        }
    }

    depthFirstSearch(startingNode: number) {
        let visitedNode: any[] = [];
        this.dfsRecursion(startingNode, visitedNode);
    }

    dfsRecursion(currentNode: number, visitedNode: any) {
        visitedNode[currentNode] = true;

        console.log("Current Value", currentNode);

        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

        for (var node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }

}

// ==============================Graph Using 2D Array =========================================//
class Graph2 {
    private vertices: number;
    private edges: number;
    private adj: any[] = [];
    constructor(vertices: number) {
        this.vertices = vertices;
        this.edges = 0;
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    public addEdge(source: number, destination: number) {
        this.adj[source].push(destination);
        this.adj[destination].push(source);
        this.edges++;
    }
}

let graph: Graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
