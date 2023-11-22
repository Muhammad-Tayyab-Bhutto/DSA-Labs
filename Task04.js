class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        this.length++;
        let node = new Node(value); // or use new Node(value);

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return node;
        }

        this.head = this.tail = node;
        return node;
    }
    dequeue() {
        if (this.head) {
            node.next = this.head;
            this.head = node;
            return node;
        }
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }
    isEmpty(){
        if (this.length == 0){
            return true;
        }
        return false;
    }
    peek(){
        if (this.head === null){
            return
        }
        return this.head.data;
    }
    print() {
        let currnetNode = this.head;
        while(currnetNode){
            console.log(currnetNode.data);
            currnetNode = currnetNode.next;
        }
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek())



queue.print();
if(queue.isEmpty()){
    console.log("queue is empty.");
} else {
    console.log("queue is not empty.");
}