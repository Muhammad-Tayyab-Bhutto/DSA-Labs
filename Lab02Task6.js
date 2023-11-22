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
    
        return newlist;
    }
    duplicateReversed(){
        let newlist = new LinkedList();
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            newlist.insertHead(currentNode.value);
            currentNode = currentNode.next;
        }
        return newlist;
    }
    removeDuplicates(){
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            let nextNode = currentNode.next;
            for (let j = i+1; j < this.length; j++){
                if (currentNode.value === nextNode.value){
                    this.removeIndex(j);
                    j--;
                    this.length--;
                }
                nextNode = nextNode.next;
            }
            currentNode = currentNode.next;
            
        }

    }
    isPresent(head, data){
        let currentNode = head;
        while (currentNode !== null){
            if (currentNode.value === data){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}

function union(list1, list2){
    let list3 = new LinkedList();
    let len = list1.length;
    let currentNode = list1.head;
    while (len--){
        list3.insert(currentNode.value);
        currentNode = currentNode.next;
    }
    len = list2.length;
    currentNode = list2.head;
    while (len--){
        list3.insert(currentNode.value);
        currentNode = currentNode.next;
    }
    list3.removeDuplicates();
    return list3;
    
}
function intersection(list1 , list2) {
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    let list3 = new LinkedList();
    for(let i = 0; i < list1.length; i++){
        while(currentNode2){
            // console.log(currentNode2.value)
            if (currentNode1.value === currentNode2.value){
                list3.insert(currentNode1.value);
            }
            currentNode2 = currentNode2.next;
        }
        currentNode1 = currentNode1.next;
        currentNode2 = list2.head;
    }
    
    return list3;
};
// Testing functions

const linkedList = new LinkedList();
const linkedList1 = new LinkedList();
linkedList.insert(7);
linkedList.insert(8);
linkedList.insertHead(9);
linkedList.insertHead(10);
linkedList1.insert(7);
linkedList1.insert(10);
linkedList1.insertHead(19);
linkedList1.insertHead(110);
// union(linkedList1, linkedList);
console.log(intersection(linkedList, linkedList1))
// linkedList.print();
// console.log(linkedList, linkedList1);