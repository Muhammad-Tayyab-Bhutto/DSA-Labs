class Node{
    constructor(){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let node = new Node(data);
        let currentNode = this.root;
        if(this.root === null){
            this.root = node;
            return this.root;
        } 
        while (currentNode){
            if (data === currentNode.data) {
                return undefined;
            }
            if (data < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = node;
                    return currentNode.left;
                } 
                currentNode = currentNode.left;
            } else {
                if (data > currentNode.data){
                    if (currentNode.right === null){
                        currentNode.right = node;
                        return currentNode.right;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}