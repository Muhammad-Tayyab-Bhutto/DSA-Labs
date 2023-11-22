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
            this.tail.next = null;

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

    // Bonus functions
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
    duplicate(){
        let newlist = new LinkedList();
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            newlist.insert(currentNode.value);
            currentNode = currentNode.next;
        }
        newlist.print();
        return newlist;
    }
    duplicateReversed(){
        let newlist = new LinkedList();
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            newlist.insertHead(currentNode.value);
            currentNode = currentNode.next;
        }
        newlist.print();
        return newlist;
    }
    findMiddle(){
        let mid = Math.round(this.length/2);
        let currentNode = this.head;
        for (let i = 0; i < mid-1; i++){
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }
}

// Testing functions

const linkedList = new LinkedList();


// Test Case 01 
// linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insertHead(3);
// linkedList.insertHead(4);
// linkedList.removeIndex(2);
// console.log(linkedList.length); // 3

// Test Case 02
linkedList.insert(7);
linkedList.insert(14);
linkedList.insert(10);
linkedList.insert(21);
linkedList.insert(22);
linkedList.print(); // 4 3 2
console.log(linkedList.findMiddle());
