class Queue{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = size;
        this.front = 0;
        this.rare = -1;
        this.count = 0;
        this.reversedArray = new Array(size); 
    }
    enqueue(data){
        if (this.rare === this.capacity-1){
            if (this.count === this.arr.length){
                return "OverFlow";
            } else {
                this.rare = -1;
            }
        }
        this.arr[++this.rare] = data;
        this.count++;
    }
    at(index){
        let count = index;
        return this.arr[index];
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
        for (let index = 0; index <= this.arr.length; index++) {
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
    reverseK(queue, k){
        for (let i = k; i >= 0; i--){
            this.reversedArray[i] = queue.dequeue();
        }
        if (k != this.capacity-1){
            for (let i = k+1; i < this.capacity; i++){
                this.reversedArray[i] = queue.at(i);
            }
        }
        for (let i = 0 ; i < this.capacity; i++){
            console.log(this.reversedArray[i]);
        }
    }
}
let queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(22);
queue.enqueue(33);
queue.reverseK(queue, 3);