class Graph {
    private vertices: number;
    private edges: number;
    private adj: any[] = [];
    edgeTo: any[] = [];
    marked: boolean[] = [];k
    constructor(vertices: number) {
        this.vertices = vertices;
        this.edges = 0;
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
            this.marked[i] = false;
        }
    }
    public addEdge(source: number, destination: number) {
        this.adj[source].push(destination);
        this.adj[destination].push(source);
        this.edges++;
    }
    numOfEdges() {
        return this.edges;
    }
    dfs(visitedVertex: number) {
        this.marked[visitedVertex] = true;
        // if statement for print is not required
        if (this.adj[visitedVertex] != undefined)
            console.log("Visited vertex: " + visitedVertex);
        for (var w in this.adj[visitedVertex]) {
            if (!this.marked[parseInt(w)]) {
                this.dfs(parseInt(w));
            }
        }
    }
    bfs(s: number) {
        var queue = [];
        this.marked[s] = true;
        queue.push(s); // add to back of queue
        while (queue.length > 0) {
            var v: any= queue.shift(); // remove from front of queue
            console.log("Visited vertex: " + v);
            for(let w = 0; w <= this.adj[v].length+1; w++) {
                if (!this.marked[(w)]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }

    pathTo(v: number) {
        var source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        }
        var path: any[] = [];
        for (var i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }
    hasPathTo(v: number) {
        return this.marked[v];
    }
    minPath(source: number, destination: number){
        let arr: number[] = [];
        for (let row = source; row < this.vertices; row++){
            // Checking which element are one on source;
        }
        return arr;
    }
}

let graph: Graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

// console.log(graph.numOfEdges());
// graph.bfs(0)
graph.dfs(1);
console.log(graph.minPath(0, 4));