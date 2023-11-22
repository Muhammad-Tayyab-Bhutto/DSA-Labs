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
    dfs(graph: any, v: any, visited: any)
    {
        visited[v] = true;
 
        for(let x in graph[v])
        {
            if (!visited[x])
            {
                this.dfs(graph, x, visited);
            }
        }
    }
    motherVertex(graph: any) {
        let visited: any[] = new Array(this.vertices);
        for (let i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        let v: number= -1;
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.dfs(graph, i, visited);
                v = i;
            }
        }

        let check = new Array(this.vertices);
        for (let i = 0; i < this.vertices; i++) {
            check[i] = false;
        }
        this.dfs(graph, v, check);
        for (let val in check) {
            if (!val) {
                return -1;
            }
        }
        return v - 1;
    }
    delelteVertex(source: any){
        for (let i = 0; i < this.vertices; i++){
            for (let j = 0; j < this.vertices; j++){
                if (this.adj[i][j] == source){
                    this.adj[i][j] = null;
                }
            }
        }
    }
    print(){
        console.log(this.adj);
    }
}

let graph: Graph = new Graph(7);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(4, 1);
graph.addEdge(6, 4);
graph.addEdge(5, 6);
graph.addEdge(5, 2);
graph.addEdge(6, 0);
graph.delelteVertex(0);
// console.log(graph.motherVertex(graph))
graph.print();
