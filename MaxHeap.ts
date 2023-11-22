// = =============================Formulas ======================================
// 1. Node = i
// 2. Parent = (i - 1)/2
// 3. left = (i * 2) + 1
// 4. right = (i * 2) + 2;
// 
class MaxHeap{
    public arr: number[];
    public length = 0;
    constructor(){
        this.arr = new Array();
    }
    // index of the parent node
    parent(index: number){
        return Math.floor(index - 1) / 2;
    }
    // index of the left child node
    leftChild(index: number){
        return (index * 2) + 1;
    }
    // index of the right child node
    rightChild(index: number){
        return (index * 2) + 2;
    }
    // returns true if index is of a node that has no children
    isLeaf(index: number) {
        return (
            index >= Math.floor(this.arr.length / 2) && index <= this.arr.length - 1
        )
    }

    // swap using ES6 destructuring
    swap(index1: number, index2: number) {
        [this.arr[index1], this.arr[index2]] = [this.arr[index2], this.arr[index1]];
    } 
    heapifyDown(index: number) {

        // if the node at index has children
        if (!this.isLeaf(index)) {

            // get indices of children
            let leftChildIndex = this.leftChild(index),
                rightChildIndex = this.rightChild(index),

                // start out largest index at parent index
                largestIndex = index;

            // if the left child > parent
            if (this.arr[leftChildIndex] > this.arr[largestIndex]) {
                // reassign largest index to left child index
                largestIndex = leftChildIndex;
            }

            // if the right child > element at largest index (either parent or left child)
            if (this.arr[rightChildIndex] >= this.arr[largestIndex]) {
                // reassign largest index to right child index
                largestIndex = rightChildIndex;
            }

            // if the largest index is not the parent index
            if (largestIndex !== index) {
                // swap
                this.swap(index, largestIndex);
                // recursively move down the heap
                this.heapifyDown(largestIndex);
            }
        }
    }

    heapifyUp(index: number) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        // while we haven't reached the root node and the current element is greater than its parent node
        while (currentIndex > 0 && this.arr[currentIndex] > this.arr[parentIndex]) {
            // swap
            this.swap(currentIndex, parentIndex);
            // move up the binary heap
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    add(element: number) {
        // add element to the end of the heap
        this.arr.push(element);
        // move element up until it's in the correct position
        this.heapifyUp(this.arr.length - 1);
    }

    // returns value of max without removing
    peek() {
        return this.arr[0];
    }

    // removes and returns max element
    extractMax() {
        if (this.arr.length < 1) return 'heap is empty';

        // get max and last element
        const max: number= this.arr[0];
        const end: any = this.arr.pop();
        // reassign first element to the last element
        this.arr[0] = end;
        // heapify down until element is back in its correct position
        this.heapifyDown(0);

        // return the max
        return max;
    }

    buildHeap(array: number[]) {
        this.arr = array;
        // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor(this.arr.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.arr[i]);
            console.log("LEFT CHILD:", this.arr[this.leftChild(i)]);
            console.log("RIGHT CHILD:", this.arr[this.rightChild(i)]);
            i++;
        }      
    }
}