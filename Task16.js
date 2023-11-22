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
        if (this.top === -1) {
            return true 
        }
        return false;
    }
    push(value){
        !this.isFull() ? this.arr[++this.top] = value : console.log("Array Index Out Of Bound.");
    }
    pop(){
        if (this.isEmpty()){ 
            console.log("Stack is Empty.") 
        }
        return this.arr[this.top--];
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
function reverseStack(stack){
    let reverse_stack = new Stack();
    for (let i = 0; i <= stack.size()+1; i++){
        reverse_stack.push(stack.pop())
    }
    // reverse_stack.print()
    return reverse_stack;
}
let stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);

reverseStack(stack);