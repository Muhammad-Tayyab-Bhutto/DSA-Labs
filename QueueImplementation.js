function Queue() {
    var collections = [];

    // This method will print the values 
    this.print = function(){
        console.log(collections);
    }

    // This method will add element in the first
    this.enqueue = function(element){
        collections.push(element);
    }

    // This method will remove first element
    this.dequeue = function(){
        return collections.shift();
    }

    // This method will return first element of the queue
    this.front = function(){
        return collections[0];
    }

    // This method will return the size
    this.size = function(){
        return collections.length;
    }

    // This method will return true if the queue is empty else false 
    this.isEmpty = function(){
        return (collections.length === 0)
    }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.print();
q.dequeue();
q.enqueue("e");
q.print();
