// // Doubly linked list

// function Node(val = null) {
//     this.val = val;
//     this.after = null;
//     this.before = null;
// }

// function LinkedList() {
//     this.head = new Node();
// }

// LinkedList.prototype.push = function (val) {
//     if (this.head.val == null) return (this.head.val = val);
//     const node = new Node(val);

//     let temp = this.head;
//     while (temp.after) {
//         temp = temp.after;
//     }
//     temp.after = node;
//     node.before = temp;
// };

// LinkedList.prototype.unshift = function (val) {
//     if (this.head.val == null) return (this.head.val = val);

//     const node = new Node();
//     node.val = this.head.val;
//     this.head.val = val;
//     node.before = this.head;
//     if (this.head.after) node.after = this.head.after;
//     this.head.after = node;
// };

// LinkedList.prototype.print = function () {
//     if (!this.head.after)
//         return console.log(this.head.val != null ? this.head.val : "Empty");

//     let temp = this.head;
//     while (temp) {
//         console.log(temp.val);
//         temp = temp.after;
//     }
// };

// LinkedList.prototype.pop = function () {
//     if (this.head.val == null) return;
//     if (!this.head.after) return (this.head.val = null);

//     let temp = this.head;
//     while (temp.after.after) {
//         temp = temp.after;
//     }
//     temp.after = null;
// };

// LinkedList.prototype.shift = function () {
//     if (this.head.val == null) return;
//     if (!this.head.after) return (this.head.val = null);

//     this.head = this.head.after;
//     this.head.before = null;
// };

// const list = new LinkedList();

// list.push(0);
// list.push(20);
// list.unshift(1);
// list.unshift(2);
// list.unshift(1);
// list.shift();

 