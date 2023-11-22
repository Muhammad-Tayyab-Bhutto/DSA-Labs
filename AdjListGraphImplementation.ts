class Nodes {
    data: number;
    next = null;
    toString: string = '';
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.toString = data + " -> "
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
        let val: string = '';
        // console.log(this.length)
        while (current) {
            val +=  (current.data) + ' -> ';
            current = current.next;
        }
        return val; 
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
        this.list[source].insert(destination);
        this.list[destination].insert(source);
    }
    print(){
        for (let i = 0; i < this.vertices; i++){
            console.log(this.list[i].print());
        }
    }
}


// let linkedList:LinkesdList = new LinkedList();
// linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insert(3);
// linkedList.insert(4);
// linkedList.insertAtHead(0);
// linkedList.remove();
// linkedList.removeHead();
// linkedList.print();

let graph = new Graph(5);


graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
graph.print();
