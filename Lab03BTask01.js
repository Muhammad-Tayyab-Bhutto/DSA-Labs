class Queue{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = size;
        this.front = 0;
        this.rare = -1;
        this.count = 0; 
    }
    enqueue(data){
        if (this.rare === this.capacity-1){
            if (this.count == this.arr.length){
                return "OverFlow";
            } else {
                this.rare = -1;
            }
        } 
        console.log(data)
        this.arr[++this.rare] = data;
        this.count++;
    
    }
    dequeue(){
        if(this.count === 0){
            return "UnderFlow";
        }
        if (this.front === this.arr.length-1){
            this.front = 0;
        }
        let number = this.arr[this.front];
        this.arr[this.front++] = null;
        this.count--;
         
        return number; 
    }
    shift(){
        for (let i = 0; i < this.arr.length; i++){
            this.arr[i] = this.arr[i+1];
        }
        return this.arr;
    }
    peek(){
        return this.arr[this.front];
    }
    print(){
        for (let index = 0; index < this.capacity; index++) {
            const element = this.arr[index];
            console.log(element)
        }
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
function decimalToBinary(decimalNumber){
    return (decimalNumber >>> 0).toString(2);
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(101);
queue.enqueue(110);
queue.print();

let number = decimalToBinary(5);
let len = queue.size();
console.log(len);
for(let i = 0; i < len; i++){
    if (queue.dequeue() == number){
        console.log("Found at ", i);
        break;
    }
}
