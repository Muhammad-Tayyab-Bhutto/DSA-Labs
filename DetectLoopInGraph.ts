class Graph {
    private vertices: number;
    private edges: number;
    private adj: any[] = [];
    private marked: boolean[] = [];
    constructor(vertices: number) {
        this.vertices = vertices;
        this.edges = 0;
        for (let i = 0; i < vertices; i++) {
            this.adj[i] = [];
            this.adj[i].push('');
        }
    }
    public addEdge(source: number, destination: number) {
        this.adj[source].push(destination);
        this.adj[destination].push(source);
    }

    public isCyclic() {
        for (let i = 0; i < this.vertices; i++) {
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != 0 && this.adj[j][i] != 0) {
                    return true;
                }
            }
        }
        return false;
    }
}

let graph: Graph = new Graph(4);
graph.addEdge(1, 2);
graph.addEdge(1, 0)
graph.addEdge(2, 3);
graph.addEdge(3, 0);
// graph.addEdge(2, 3);
// graph.addEdge(3, 3);

// console.log(graph.numOfEdges());
// graph.bfs(0)
if (graph.isCyclic())
    console.log("Graph contains cycle");
else
    console.log("Graph doesn't "
        + "contain cycle");