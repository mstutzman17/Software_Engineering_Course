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

    remove(value) {

        // this is the helper functrion recursively find and remove a node
        function removeNode(node,value){

            // this code is if the node we want to remove is not found
            if (node === null) return null;

            if(value < node.value) {

                //search the left side
                node.left = removeNode(node.left, value)
                return node;

            } else if (value > node.value) {

                // search the right side
                node.right = removeNode(node.right, value);
                return node;

            } else {

                // cases for if node is found

                //Case One: node has no children
                if (!node.left && !node.right) return null

                // Case Two: node has only right child
                if (!node.left) 
                    return node.right;

                // Case Three: node has only left child
                if(!node.right) 
                    return node.left;

                // Case Four: node has 2 children
                // find smallest value in the right subtree
                let temp = findMin(node.right);

                //replace value with smallest from right
                node.value = temp.value;

                // delete duplicate node
                node.right = removeNode(node.right, temp.value);
                return node;
            }
        }

        // helper to find min value in a subtree
        function findMin(node) {
            
            while (node.left !== null)  {
                node = node.left;
            }

            return node;
        }

        // start recursion from the root
        this.root = removeNode(this.root, value)
        return this;
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

console.log(numberTree.remove(15));