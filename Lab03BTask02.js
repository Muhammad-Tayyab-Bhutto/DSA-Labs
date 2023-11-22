class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = size;
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
        this.isEmpty() ? console.log("Stack is Empty.") : this.arr[--this.top];
    }
    size(){
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
class TwoStacks{
    constructor(stack1Size, stack2Size){
        this.stack1 = new Stack(stack1Size);
        this.stack2 = new Stack(stack2Size);
        this.arr = new Array(stack1Size + stack1Size  + 1);
        this.count1 = 0;
        this.count2 = stack1Size;
    }
    push1(data){
        if (this.count1 < this.stack1.size()){
            this.arr[this.count1++] = data;
        }
    } 
    push2(data){
        if (this.count2 < this.stack1.size()+this.stack2.size()){
            this.arr[this.count2++] = data;
        }
    }
    pop1(){
        this.count1--;
        if (this.count1 < this.stack1.size()){
            this.arr[this.count1] = undefined;
        }
    } 
    pop2(){
        this.count2--;
        if (this.count2 >= this.stack1.size() && this.count2 < this.stack1.size()+this.stack2.size()){
            this.arr[this.count2] = undefined;
        }
    }
    print() {
        
        for (let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i]);
        }
    }
}
let stack = new TwoStacks(3, 4);
stack.push1(1);
stack.push1(2);
stack.push1(3);
stack.push2(1);
stack.push2(2);
stack.push2(3);
stack.push2(4);
stack.pop1();
stack.pop1();
stack.pop2();
stack.print();


