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
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top Element is " , stack.peek());
console.log("Size of is " , stack.size());

stack.pop();
stack.pop();
stack.pop();

console.log("Size of stack is: " , stack.size());

if(stack.isEmpty()){
    console.log("Stack is empty.");
} else {
    console.log("Stack is not empty.");
}
