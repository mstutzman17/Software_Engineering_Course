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

    dfsPreOrder() {

        // we begin our search at the root node
        dfsPreOrder(Node=this.root)

            // print the value of the root node
            console.log(Node.val);

            // if there is a left node, we traverse the left subtree
            if(Node.left) this.dfsPreOrder(Node.left);
            // if there is a right node, we traverse the right subtree
            if(Node.right) this.dfsPreOrder(Node.right)
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