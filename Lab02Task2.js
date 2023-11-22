function createNode(value) {
    return {
        value: value,
        next: null,
    };
}
// or
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        this.length++;
        let node = createNode(value); // or use new Node(value);

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return node;
        }

        this.head = this.tail = node;
        this.tail.next = this.head;
        return node;
    }

    insertHead(value) {
        this.length++;
        let node = createNode(value);

        if (this.head) {
            node.next = this.head;
            this.head = node;
            return node;
        }

        this.head = this.tail = node;
        this.tail.next = this.head;
        return node;
    }

    removeHead() {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }

    remove() {
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;

            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = this.head;

            return tailNode;
        }
        return undefined;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // insert at specific index

    insertIndex(value, index) {
        if (index >= this.length) {
            throw new Error("Insert index out of bounds");
        }

        if (index === 0) {
            return this.insertHead(value);
        }

        this.length++;
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        const newNode = createNode(value);
        newNode.next = currentNode;
        previousNode.next = newNode;
        return newNode;
    }

    // remove at specific index

    removeIndex(index) {
        if (index >= this.length) {
            throw new Error("Remove index out of bounds");
        }

        if (index === 0) {
            return this.removeHead();
        }

        this.length--;
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        return currentNode;
    }
    detectLoop() {
        // initial with fast and slow pointers with head
        let slow = this.head
        let fast = this.head
        //traverse linked list
        while (fast && fast.next) {
            // fast moves by two
            fast = fast.next.next
            // slow moves by one
            slow = slow.next
            // two pointers meet, cycle
            if (fast === slow) {
                return true
            }
        }

        return false
    }

    // Or 
    // detectLoop() {
    //     // Set variable to store distinct nodes
    //     let set = new Set()
    //     // for traversing, initialize current with head node
    //     let current = this.head

    //     //traverse the linked list
    //     while(current){
    //         if(set.has(current)){
    //             // if duplication occurs, return true
    //             return true
    //         }else{
    //             set.add(current)
    //         }

    //         current = current.next
    //     }
    //     // traverse is completed, loop not found
    //     return false
    // }
}

function getNode(value, linkedList) {
    let currentNode = linkedList.head;
    // Treversing the List
    let i = 0;
    while (currentNode) {
        if (currentNode.value == value) {
            return i;
        }
        currentNode = currentNode.next;
        i++;
    }
    return -1;
}
function swap(x, y, linkedList) {
    let a = getNode(x, linkedList);
    let b = getNode(y, linkedList);
    let currentNode = linkedList.head;
    let previousX;
    let previousY;
    if (x == y) {
        return;
    }
    for (let i =0; i < a-1; i++){
        previousX = currentNode;
        currentNode = currentNode.next;        
    }
    for (let i = 0; i < b - 1; i++){
        previousY = currentNode;
        currentNode = currentNode.next;  
    }
    currentNode = linkedList.head;
    for (let i = 0; i < a; i++){
        currentNode = currentNode.next;
        previousX.next = currentNode;
    }
        // swap
    let temp = previousX.value
    previousX.val = previousY.value
    previousY.val = temp

    return head
    
}
// Testing functions

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(8);
// linkedList.insertHead(9);
linkedList.insertHead(10);
linkedList.insertHead(11);
linkedList.insertHead(10);

// linkedList.removeIndex(2);
// console.log(linkedList.length); // 3
swap(8, 10, linkedList);
linkedList.print(); // 10 9 8 
// console.log(linkedList.detectLoop());
console.log(getNode(8, linkedList));