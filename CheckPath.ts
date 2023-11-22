class Nodes {
    data: number;
    next = null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    private head: any;
    private tail: any;
    private length;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(data: number) {
        this.length++;
        let node: Nodes = new Nodes(data);
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return node;
        }
        this.head = this.tail = node;
        return node;
    }
    insertAt(position: number, data: number) {
        let node: Nodes = new Nodes(data);
        let current: any = this.head;
        let previous: any = null;
        let index: number = 0;
        if (position > this.length || position < 0) {
            return false;
        } else {
            if (position == 0) {
                return this.insert(data);
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                current.next = node;
                previous.next = null;
            }
            this.length++;
            return true;
        }
    }
    insertAtHead(data: number) {
        this.length++;
        let node: Nodes = new Nodes(data);
        if (this.head) {
            node.next = this.head;
            this.head = node;
            return node;
        }
        this.head = this.tail = node;
        return node;
    }
    removeHead() {
        if (this.head) {
            const removehead = this.head;
            this.length--;
            this.head = this.head.next;
            return removehead;
        }
        return undefined;
    }
    remove() {
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;

            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }
    valueAt(data: number) {
        let current = this.head;
        let currentIndex: number = 0;
        while (current) {
            if (current.data == data) {
                return currentIndex;
            }
            currentIndex++;
            current = current.next;
        }
    }
    print() {
        let current = this.head;
        // console.log(this.length)
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    size(){
        return this.length;
    }

}
class Graph {
    private vertices:number;
    private list: LinkedList[] = [];
    constructor(vertices:number){
        this.vertices = vertices;
        this.list = new Array(vertices);
        for(let i =0; i<vertices; i++){
            this.list[i] = new LinkedList();
        }
    }
    addEdge(source: number, destination: number){
        console.log(source, " -> ", destination)
        this.list[source].insert(destination);
        this.list[destination].insert(source);
    }
    shortestPath(source: number, destination: number){
        for (let i = 0; i < this.vertices; i++) {
            console.log(this.list[source].size())
            
        }
    }
}
let graph = new Graph(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(5, 4);
graph.shortestPath(0, 4);

