class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
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
    pop() {
        if (this.head == null){
            return;
        }
            
        // Checking if head.next is null so return null
        if (this.head.next == null) {
            this.head = null;
            return;
        }
 
        // Find the second last node
        let currentNode = this.head;
        while (currentNode.next.next != null)
            currentNode = currentNode.next;
 
        // Change next of second last
        currentNode.next = null;
 
        return this.head;
    }
    peek(){
        let currentNode = this.head;
    }
    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    
}
let list = new Stack();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.pop();
list.pop();
list.pop();
list.print();