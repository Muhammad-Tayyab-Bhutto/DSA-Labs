class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = 0;
        this.top = -1;
    }
    isFull(){
        (this.top === this.arr.length) ? true : false;
    }
    isEmpty(){
        (this.top === -1) ? true : false;
    }
    push(value){
        !this.isFull() ? this.arr[++this.top] = value : console.log("Array Index Out Of Bound.");
    }
    pop(){
        if (this.isEmpty()) {
            console.log("Stack is Empty.")
        }
        else {
            return this.arr[this.top--];
        }
    }
    size(){
        this.capacity = this.top + 1;
        return this.capacity;
    }
    peek(){
        return this.arr[this.top];
    }
    print(){
        for (let i = 0; i <= this.top; i++){
            console.log(this.arr[i]);
        }
    }
}
class Queue{
    constructor(size){
        this.queue = new Stack(size);
        this.queue2 = new Stack(size);
        this.capacity = size;
        this.count = 0; 
    }
    enqueue(data){
        this.count++;
        if (this.count <= this.capacity){
            this.queue.push(data);
        } 

        
    }
    swap(){
        for (let i = 0; i < this.count; i++){
            this.queue2.push(this.queue.pop());
        }
    }

    
    dequeue(){
        this.swap();
        this.count--;
        if(this.count < 0){
            return "UnderFlow";
        } else {
            this.queue2.top = this.count;
            return this.queue2.pop();
        }
    }
    shift(){
        for (let i = 0; i < this.arr.length; i++){
            this.arr[i] = this.arr[i+1];
        }
        return this.arr;
    }
    print(){
        this.queue2.print();
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
let queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();




queue.print();
