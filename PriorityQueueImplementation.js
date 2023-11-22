// Priority Queue

function PriorityQueue(){
    var collections = [];

    // this method will print the element of priority queue
    this.print = function(){
        console.log(collections);
    }

    this.enqueue = function(element){
        // There are two cases to add element in priority queue
        // One is add element in the begining if it is empty
        // Second is that add element on given index
        if (this.isEmpty()){
            collections.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collections.length; i++){    // checking priorities
                if (element[1] < collections[i][1]) {
                    collections.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collections.push(element);
            }
        }
    }

    // This method will remove first element
    this.dequeue = function(){
        var value = collections.shift();
        return value[0];
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

var pq = new PriorityQueue();
pq.enqueue(["Bike", 3])
pq.enqueue(["Car", 2]);
pq.enqueue(["Cycle", 1]);
pq.enqueue(["Mobile", 2]);
pq.print();
pq.dequeue();
pq.print();