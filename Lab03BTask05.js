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
        if (this.top === -1)return true; else false;
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
    insert(element, stack) {
        if (!stack.isEmpty() && element > stack.peek()) {
            let top = stack.peek();
            stack.pop();
            this.insert(element, stack);
            stack.push(top);
        }
        else {
            stack.push(element);
        } 
    }
    
    sortStack(stack) {
        if (!stack.isEmpty()) {
            let top = stack.peek();
            stack.pop();
            this.sortStack(stack);
            this.insert(top, stack);
        }
        return stack;
    }
    print(){
        for (let i = 0; i <= this.top; i++){
            console.log(this.arr[i]);
        }
    }
}
let stack = new Stack(4);
stack.push(1);
stack.push(4);
stack.push(13);
stack.push(3);

let stack2 = stack.sortStack(stack)
for (let i = 0; i < 4; i++){
    console.log(stack2.pop())
}
