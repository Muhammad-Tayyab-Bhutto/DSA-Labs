class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(data) {
        let node = new Node(data);
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return node;
        }
        this.head = this.tail = node;
        return node;
    }
    removeNthFromEnd(index) {
        let fast = this.head;
        let slow = this.head
        for (let i = 0; i < index; i++) {
            fast = fast.next;
        }
        if (!fast) {
            return this.head.next;
        }
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next
        return this.head;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
let linkedList = new LinkedList();
linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insert(3);
// linkedList.insert(4);
// linkedList.insert(5);

console.log(linkedList.removeNthFromEnd(1));
linkedList.print();