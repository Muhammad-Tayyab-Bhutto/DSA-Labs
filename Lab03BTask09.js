class Node {
    constructor(value, min,  next) {
        this.value = value;
        this.min = min;
        this.next = next;
    }
}
class MinStack {
    constructor(){
        this.head = null;
    }
    push(x) {
        if (this.head == null) 
            this.head = new Node(x, x, null);
        else 
            this.head = new Node(x, Math.min(x, this.head.min), this.head);
    }
    
    pop() {
        this.head = this.head.next;
    }
    
    top() {
        return this.head.value;
    }
    
    getMin() {
        return this.head.min;
    }
}
 
let arr = new MinStack();
arr.push(5);
arr.push(2);
arr.push(5);
arr.push(3);
arr.push(3);
arr.push(3);
console.log(arr.getMin());
