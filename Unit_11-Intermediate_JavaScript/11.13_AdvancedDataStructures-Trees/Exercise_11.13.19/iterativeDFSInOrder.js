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

    iterativeDFSInOrder() {

        // array to store values in an in-order sequence
        const result= [];

        //stack to simulate recursion
        const stack = [];

        // start traversal from the root node
        let current = this.root;

        //continue as long as there's a current node or as long as their are nodes on the stack
        while(current !== null || stack.lenght > 0) {

            // traverse as far left as possible
            while (current !== null) {
                //save the current node to come back to later
                stack.push(current);
                // move to the left child
                current = current.left;
            }

            //when there aren't anymore left nodes, go back and process node
            current = stack.pop();
            // visit the node (in-order means we add it now)
            result.push(current.value);

            //now, traverse the right subtree of this node
            current = current.right;
        }

        //return the full in-order list of values
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

console.log(numberTree.iterativeDFSInOrder())