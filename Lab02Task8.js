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
    ObjectnthElementFromEnd(list, n){
        let currentNode = list.head;
        let count = list.length-1;
        while(currentNode){
            if (count === n){
                return currentNode.value;
            }
            if (n == list.length){
                return null;
            }
            count--;
            currentNode = currentNode.next;
        }

    }
    isPalindrome(list){
        let currentNode = list.head;
        let len = Math.floor((list.length)/2);
        for (let i = 0; i < len; i++){
            if (currentNode.value !== this.ObjectnthElementFromEnd(list, i)){
                return false;
            }
            currentNode = currentNode.next;
        }
        return true;
    }
}

// Testing functions

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(1);
// linkedList.insert(0);
linkedList.insert(1);
linkedList.insert(1);

console.log(linkedList.isPalindrome(linkedList));
