function createNode(value) {
    return {
        value: value,
        next: null,
    };
}

// or
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

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
    
}

// Testing functions

let linkedList = new LinkedList();
let linkedList2 = new LinkedList();
linkedList.insert(7);
linkedList.insert(8);
linkedList.insertHead(9);
linkedList.insertHead(10);
linkedList.removeIndex(2);
// console.log(linkedList.length); // 3
// console.log('Original Linked List.')
// linkedList2 = linkedList;
// linkedList2.print(); // 10 9 8 
console.log('Dulicated Linked List.');
linkedList.duplicateReversed();
// console.log('Reversed Dulicated Linked List.');

// linkedList.duplicateReversed();
