class Nodes {
    private data: any;
    private leftNode: any;
    private rightNode: any;
    constructor(data: any, leftNode: any, rightNode: any) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BinarySearchTree {
    root: any;
    insert(data: any) {
        let node: Nodes = new Nodes(data, null, null);
        if (this.root == null){
            this.root = node;
        } else {
            let current: any = this.root;
            let parentNode: any;
            while (true) {
                parentNode = current;
                console.log(current.data)
                if (data < current.data) {
                    parentNode.leftNode = node;
                    break;
                } else {
                    current = current.rightNode;
                    if (current == null) {
                        parentNode.leftNode = node;
                        break;
                    }
                }
            }
        }

    }
    toString(){
        return 
    }
    getMin() {
        var current = this.root;
        while (!(current.rightNode == null)) {
            current = current.rightNode;
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
        } else if (data < node.data) {
            node.leftNode = this.removeNode(node.leftNode, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }


    }
    printAncestors(node: any, target: any)
    {
        if (node == null){
            return false;
        }
           
  
        if (node.data == target){
            return true;
        }
            
        if (this.printAncestors(node.left, target) || this.printAncestors(node.right, target)){
            console.log(node.data + " ");
            return true;
        }
        return false;
    }
    inOrder(node: any) {
        if (!(node == null)) {
            console.log(this.inOrder(node.left));
            console.log(this.inOrder(node.right));
        }
    }
}
var nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.printAncestors(nums.root, 37)