class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(value){
        this.root = null; 
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value < this.current) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(value > this.current) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        var found = false;
        while (current & !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else found = true;
        }
        if(!found) return false
        return current;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(20);