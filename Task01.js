class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = 0;
        this.top = -1;
    }
    isFull(){
        if(this.top === this.arr.length){
            return  true
        } return false;
    }
    isEmpty(){
        if (this.top === -1) {
            return true 
        } return false;
    }
    push(value){
        if (!this.isFull()) {
            this.arr[++this.top] = value
        } return "Array Index Out Of Bound.";
    }
    pop(){
        if (this.isEmpty())  {
            console.log("Stack is Empty.")
        } return this.arr[this.top--];
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
function insert(element){
    let arr = [1, 3];
    let stack = new Stack(arr.length+1);
    let len = arr.length;
    for (let i = 0; i < len; i++){
        if (element < arr[i]){
            stack.push(arr.pop());
        } else {
            stack.push(arr.pop());
        }
    }
    // return stack;
    stack.print()
}
// let stack = new Stack(3);
// stack.push(1);
// stack.push(2);
// stack.push(3);

// stack.print();
// stack.pop();
// stack.pop();
// stack.pop();

// stack.print();

// console.log("Top Element is " , stack.peek());
// console.log("Size of is " , stack.size());
// if(stack.isEmpty()){
//     console.log("Stack is empty.");
// } else {
//     console.log("Stack is not empty.");
// }
insert(5);