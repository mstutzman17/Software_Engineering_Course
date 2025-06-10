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

    findSecondHighestNode(root) {

        // if there's no tree or only one node, second highest can't exist
        if (!root || (!root.left && !root.right)){
            return null
        }

        let current = root;

        // traverse to the rightmost node (which is the largest in BST)
        while (current) {

            //Case One: current node has a right child, and that child has nbo children. Then current is second largest.
            if(
                current.right &&
                !current.right.left &&
                !current.right.right
            ) {
                return current.value;
            }

            // Case Two: No right child, which means we're at the largest node, so second largest is the largest in the left subtree
            if (!current.right && current.left) {
                return findMax(current.left).value;
            }

            // otherwise, move to right child
            current = current.right;
        }

        // this is a fallback
        return null;
    }

    // helper to find max node in a subtree (used in case two)
    findMax(node) {

        while(node.right) {
            node= node.right;
        }

        return node;
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

console.log(numberTree.findSecondHighestNode(numberTree.root))
