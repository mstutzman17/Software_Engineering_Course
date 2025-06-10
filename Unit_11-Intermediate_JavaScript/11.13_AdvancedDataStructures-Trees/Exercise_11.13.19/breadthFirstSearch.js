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

    breadthFirstSearch() {

        // holds the final list of node values in BFS order
        const result = [];
        
        // queue for keeping track of nodes to visit next
        const queue = [];

        // if there's a root node, add it to the queue to start BFS
        if(this.root) queue.push(this.root);

        // this ensures we search all the nodes of a given BST
        while(queue.length > 0) {

            // removes first node from queue and stores it in 'current'
            const current = queue.shift();
            //visits node and adds its value to the result array
            result.push(current.value);

            // if there is a left child, ad it to the queue
            if(current.left) queue.push(current.left)
            // same if there is a right child
            if (current.right) queue.push(current.right);
        }

        //return the full list of nodes in BFS order
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

console.log(numberTree.breadthFirstSearch())