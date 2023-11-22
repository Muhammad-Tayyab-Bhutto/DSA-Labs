// Implimenting Stack

var Stack = function() {
    this.count = 0;
    this.storage = {}

    // Adds a value onto the end of stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // returning the size of array
    this.size = function(){
        return this.count;
    }

    // accessing the last value in the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log("Size of Stack ", myStack.size());
console.log("Last Element in Stack ",myStack.peek());
console.log("Element removed. ", myStack.pop());
console.log("After Removing Last Element in Stack", myStack.peek());
console.log("Size of Stack ", myStack.size())