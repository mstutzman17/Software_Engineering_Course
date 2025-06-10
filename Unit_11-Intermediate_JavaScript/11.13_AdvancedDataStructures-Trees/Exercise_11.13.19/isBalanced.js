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

    isBalanced(root) {

        // helper function to get the height of a subtree and check balance along the way
        function checkHeight(node) {

            //base case: if there's no node, the height is 0
            if (node === null) return 0;

            // recursively get the height of the left subtree
            let leftHeight = checkHeight(node.left);

            // if left subtree is already unbalanced, propagate -1 up
            if(leftHeight === -1) return -1;

            // recursively get the height of the right subtree
            let rightHeight = checkHeight(node.right);

            // if right subtree is already unbalanced, propagate -1 up
            if (rightHeight === -1) return -1;

            // if the fifference between left and right subtree heights is more than 1, tree is unbalanced. return -1 as a flag
            if(Math.abs(leftHeight - rightHeight) > 1) return -1;

            // if it's balanced, return the height of the currrent subtree
            return Math.max(leftHeight, rightHeight) + 1;
        }
        
        // start the check from the root. if the result is -1, the tree is unbalanced
        return checkHeight(this.root) !== -1;
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

console.log(numberTree.isBalanced())