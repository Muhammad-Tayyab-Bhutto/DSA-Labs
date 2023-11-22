class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.head = null;
        this.top = null;
        this.capacity = -1;
    }
    push(data){
        ++this.capacity;
        let node = new Node(data);
        if(this.top){
            this.top.next = node;
            this.top = node;
            return node;
        }
        this.head = node;
        this.top = node;
        return node;
    }
    pop() {
        if (!this.isEmpty()){
            --this.capacity;
            let currentNode = this.head;
            this.head = this.head.next; 
            return currentNode;
        } else {
            console.log("Stack is Empty.")
        }
    }
    isEmpty(){
        if (this.capacity == -1){
            return true;
        }
        return false;
    }
    peek(){
        return this.top.data;
    }
    size(){
        let len = this.capacity + 1;
        return len;
    }
    print() {
        let currnetNode = this.head;
        while(currnetNode){
            console.log(currnetNode.data);
            currnetNode = currnetNode.next;
        }
    }
}


class Queue{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.count = 0; 
    }
    enqueue(data){
        this.count++;
        this.stack1.push(data);
        this.stack2.push(this.stack1.pop());
        
        this.stack2.print();
    }
    dequeue(){
        this.count--;
    }
    
    peek(){
        return this.stack2.peek();
    }
    print(){
        console.log(this.stack2)
    }
    isFull(){
        (this.count === this.arr.length) ? true : false; 
    }
    isEmpty(){
        if (this.count == 0){
            return true;
        }
        return false;
    }
    size(){
        return this.count;
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.peek())
queue.dequeue();
queue.dequeue();



queue.print();
if(queue.isEmpty()){
    console.log("queue is empty.");
} else {
    console.log("queue is not empty.");
}