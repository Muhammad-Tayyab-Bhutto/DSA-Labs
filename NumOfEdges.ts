class Graph {
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
    numOfEdges(){
        return this.edges;
    }
}

let graph: Graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.numOfEdges());