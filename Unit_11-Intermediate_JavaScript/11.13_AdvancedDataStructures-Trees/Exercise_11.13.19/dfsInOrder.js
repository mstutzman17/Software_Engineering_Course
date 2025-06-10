export class Node{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor(){
        this.root = null
    }

    dfsInOrder() {

        // this will store the values in an in-order sequence (left -> root -> right)
        const result = [];

        // helper funtion that will handle recursion
        function traverse(node) {

            // base case: if there's no node, stop recursion
            if (node === null) return;

            // Case One: recursively traverse the left subtree
            traverse(node.left);

            // Case Two: visit current node (add its value to result array)
            result.push(node.value)

            // Case Three: recursively traverse the right subtree
            traverse(node.right);
        }

        // start traversal from root node3
        traverse(this.root);

        // return the in-order result array
        return result;
    }
}

// Manually Creating a BT

const numberTree = new BST();

// Create root
numberTree.root = new Node(10);

// Left subtree
numberTree.root.left = new Node(5);
numberTree.root.left.left = new Node(3);
numberTree.root.left.right = new Node(7);

// Right subtree
numberTree.root.right = new Node(15);
numberTree.root.right.right = new Node(18);

console.log(numberTree)