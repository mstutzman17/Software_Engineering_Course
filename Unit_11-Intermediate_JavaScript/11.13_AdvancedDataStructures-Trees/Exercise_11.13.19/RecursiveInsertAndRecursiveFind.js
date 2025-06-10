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

    recursiveInsert(value){

        // this logic creates an instance of a new Node that will be placed in the tree somewhere
        const newNode = new Node(value)

        // the next two lines say if the tree is empty, set the new node as the root
        if(!this.root) {
            this.root = newNode;

            // this logic will end insertion if the tree is empty
            return this;
        }

        // recursive helper function that will find correct position to insert the new Node
        // the 2 parameters of the helper function are: node we're comparing against (current) and value of node we want to insert
        function insertNode(current, newNode){     

            // we compare values of current node and new node
            if (newNode.value < current.value) {

                // we check if the left child of the current node is empty
                // if it's empty we insert the newNode
                if(!current.left) {
                    current.left = newNode;

                // if there is a left child, we recursively call insertNode to move down the left side of tree
                } else {
                    insertNode(current.left, newNode);
                }

            // if value of newNode is greater than current node, we insert to the right of current node
            } else if (newNode.value > current.value) {

                // we check if there is a right child
                // if not, we insert the newNode as the right child
                if (!current.right) {
                    current.right = newNode;

                // if there is a right child, we move down the tree using recursive insertNode
                } else {
                    insertNode(current.right, newNode)
                }
            }
        }

            // this will start recursive insertion by calling helper funciton with root of tree and newNode
            insertNode(this.root, newNode)

            //this allows chaining or just ends the method
            return this;
    }

    recursiveFind(value){

        // start searching from root
        return search(this.root, value);

        // here we define helper function to handle recursion
        function search(node, value) {

            // base case: if node is null, we don't find a value
            if (node === null) return null;

            // if value matches current node, we return node
            if (value === node.value) return node;

            // if value is less than current node, we search left subtree
            if(value < node.value) {
                return search(node.left, value);
            }

            // if value greater, search right subtree
            return search(node.right,value)
        }
    }
}

const numberTree = new BST()

numberTree.recursiveInsert(17)
numberTree.recursiveInsert(15)
numberTree.recursiveInsert(20)
numberTree.recursiveInsert(10)
numberTree.recursiveInsert(12)
numberTree.recursiveInsert(53)
numberTree.recursiveInsert(32)
numberTree.recursiveInsert(47)
numberTree.recursiveInsert(77)
numberTree.recursiveInsert(27)

console.log(numberTree)

console.log(numberTree.recursiveFind(11))
console.log(numberTree.recursiveFind(15))