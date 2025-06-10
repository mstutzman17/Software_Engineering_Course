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

    insert(value){

        // since we may be making multiple references to the new node, will define a variable
        const newNode = new Node(value)

        // these two lines are  saying that if there is no root node, the value that we insert when calling our insert method will become the root
        if(!this.root){
            this.root = newNode

            // if we have to create a root node, this would return the whole tree (which is just a root node at this point)
            return this
        }

        //this is our current marker
        let current = this.root

        while (true){

            // checks if we are trying to insert a duplicate value
            if(value === current.value) return undefined

            // this is checking if the number we want to add is less than our current node
            if(value < current.value){      

            // we check if there is a left child for the current node
            if(!current.left){

                //if both statements are true, we insert our number (newNode) as the left child of our current node
                current.left = newNode

                // this will break us out of the while loop
                return this
            }

                 // if there was already a value at current.left, this will move the current marker to the next node.
                current = current.left

            // this also ensures that the while loopo keeps looping until there is NOT a left child so that we can insert the new value there
            } else if(value > current.value){
                
                if(!current.right){
                    current.right = newNode
                    return this
                }
                
                current = current.right
            }
        }
     }

     find(value){

        // if there is no root, there is no tree to traverse and the value we are looking for is not present.
        if(!this.root){
            return false    
        }

        // this allows us to traverse the tree without changing the root node. 
        let tree = this.root;

        while(tree) {

            // this if statement determines if the value we're looking for is < the value we're pointing at. If it is, we move down the tree to the left
            if(value < tree.value){
                tree = tree.left
            
            // determines if value we're looking for is > value we're pointing at. if so, we move down the tree to the right.
            } else if(value > tree.value){
                tree = tree.right
            
            // determines if value we're looking for is = to value we're pointing at. if so, we return the tree.
            } else if(value === tree.value){
                return tree;
            } 
        }

        //this will initialize if the tree value becomes null. this will also end the while loop.
        return false
     }
}

const numberTree = new BST()

numberTree.insert(15)
numberTree.insert(20)
numberTree.insert(10)
numberTree.insert(12)
numberTree.insert(23)
numberTree.insert(53)
numberTree.insert(17)
numberTree.insert(27)
numberTree.insert(57)
numberTree.insert(87)

console.log(numberTree.find(23))

console.log(numberTree)
