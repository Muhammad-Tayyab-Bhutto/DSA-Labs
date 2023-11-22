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

function nextGreaterElement(arr)
{
    let index=0;
    let target = arr[0]
    for(let i = 0;i<arr.length;i++)
        if(arr[i] == target)
            index = i;
    for(let i = index+1;i<arr.length;i++)
        if(arr[i] > target)
            return arr[i];
    return -1;
}
var arr = [11, 13, 21, 3];
console.log(nextGreaterElement(arr))