class Nodes {
    data: any;
    leftNode: any;
    rightNode: any;
    constructor(data: any, leftNode: any, rightNode: any) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BinarySearchTree {
    root: any;
    toString: any;
    insert(data: any) {
        let node: any = new Nodes(data, null, null);
        let current: any = this.root;
        if (this.root == null) {
            this.root = node;
            return this.root;
        } else {
            while (current) {
                if (data == current.data) {
                    return undefined;
                }
                if (data < current.data) {
                    if (current.leftNode === null) {
                        current.leftNode = node;
                        return current.leftNode;
                    }
                    current = current.leftNode;

                } else {
                    if (current.rightNode === null) {
                        current.rightNode = node;
                        return current.rightNode;
                    }
                    current = current.rightNode;
                }
            }
        }

    }

    getMax() {
        var current = this.root;
        while (!(current.rightNode == null)) {
            current = current.rightNode;
        }
        return current.data;
    }
    getMin() {
        var current = this.root;
        while (!(current.leftNode == null)) {
            current = current.leftNode;
        }
        return current.data;
    }
    remove(data: number) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node: any, data: number) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.rightNode;
            }
            // node has no right child
            if (node.right == null) {
                return node.leftNode;
            }
            // node has two children
            var tempNode = this.getMin();
            node.data = tempNode.data;
            node.rightNode = this.removeNode(node.rightNode, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.leftNode = this.removeNode(node.leftNode, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }


    }

    // Level Ordered Traversal 
    levelOrderedTraversal() {
        let queue: number[] = [];
        queue.push(this.root);

        while (queue) {
            let temp: any = queue.shift();
            console.log(temp.data);
            if (temp.leftNode) {
                queue.push(temp.leftNode);
            }
            if (temp.rightNode) {
                queue.push(temp.rightNode);
            }
        }
    }

    // Three Methods of traversing tree using DFS
    // 1. Pre Ordered traversal => Root, Left, Right
    // 2. Inordered Traversal => Left, Root, Right
    // 3. Post Ordered Traversal => Left, Right, Root.

    // Visit current node before its Children
    preOrderTraversal(node: any) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
        return toString;
    }
    // First visit left branch, then the current node, and finally the right branch, because of how elements are distributed in the BST, they will be visited in the ascending order:
    inOrderTraversal(node: any) {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    }

    // Visit Current Node Children First then the Parent.
    postOrderTraversal(node: any) {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }
    // Finding Height of a tree 
    height(node: any): number {
        if (node == null)
            return -1;
        if (node.leftNode == null && node.rightNode == null)
            return 0;

        return 1 + (Math.max(this.height(node.leftNode), this.height(node.rightNode)));
    }
    
    // Finding depth of tree
    findDepth(node: any): number {
        let depth: number = 0;
        while (node) {
            depth++;
            node = node.left;
        }
        return depth;
    }
    // Finding Diameter it will be the longest path  in tree.
    diameter(node: any): any {
        if (node == null) {
            return 0;
        }
        let left = this.diameter(node.leftNode);
        let right = this.diameter(node.rightNode);
        let height = (this.height(node.leftNode) + this.height(node.rightNode) + 1);
        let answer = Math.max(left, Math.max(right, height));
        return answer;
    }
    // Finding data 
    find(data: number) {
        let current = this.root;
        while (current) {
            console.log(current.data);
            if (data == current.data) {
                return true;
            } else if (data < current.data) {
                if (current.data == data) {
                    return true;
                }
                current = current.leftNode;
            } else {
                if (current.data == data) {
                    return true;
                }
                current = current.rightNode;
            }
        }
        return false;
    }
    // Checking wheather tree one is equal to tree two.
    checkEquality(firstNode: any, secondNode: any): any {
        if (firstNode == null && secondNode == null) {
            return true;
        }
        if (firstNode != null && secondNode != null) {
            return (firstNode.data == secondNode.data && this.checkEquality(firstNode.leftNode, secondNode.leftNode)
                && this.checkEquality(firstNode.rightNode, secondNode.rightNode));
        }
        // return false;
    }
    // Checking Whether Tree is Perfect or not.
    isPerfect(node: any, depth: any, level: number): boolean {
        if (node == null) {
            return true;
        }
        if (node.leftNode == null && node.right == null) {
            return (depth == level + 1)
        }
        if (node.left == null || node.right == null) {
            return false;
        }
        return (this.isPerfect(node.leftNode, depth, level + 1) && this.isPerfect(node.rightNode, depth, level + 1))
    }
    isBalanced(node: any): any {
        if (node == null) {
            return true;
        }
        let left = this.isBalanced(node.left);
        let right = this.isBalanced(node.right);
        let diff = Math.abs(this.height(node.leftNode) - this.height(node.rightNode)) <= 1;
        if (left && right && diff) {
            return true;
        } else {
            return false;
        }
    }
}
var tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(13);
// tree.insert(1);
// tree.insert(5);
// tree.insert(0.5);
// tree.insert(2);
// tree.insert(4);
// tree.insert(17);
var tree2 = new BinarySearchTree();
tree2.insert(1);
tree2.insert(2);
tree2.insert(3);
// tree2.insert(1);
// tree2.insert(5);
// tree2.insert(17);
// console.log(tree.checkEquality(tree, tree2));
// tree.insert(22);
// console.log(tree.remove(23));
// console.log(tree.getMin())
// tree.print();
console.log(tree.preOrderTraversal(tree.root));
console.log(tree.inOrderTraversal(tree.root));
console.log(tree.postOrderTraversal(tree.root))
// console.log(tree.toString);
// console.log(tree.height(tree.root))
// console.log(tree.find(37));
// tree.levelOrderedTraversal();
// console.log(tree.findDepth(tree.root));
// console.log(tree.isPerfect(tree.root, tree.findDepth(tree.root), 4));
// console.log(tree.diameter(tree.root))
