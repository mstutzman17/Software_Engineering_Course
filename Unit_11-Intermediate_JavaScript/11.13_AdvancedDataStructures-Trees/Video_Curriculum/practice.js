// document.documentElement.children



// let amy = new Node('amy', [new Node('Bob'), new Node('Barb'), new Node('Barry')])
// console.log(amy)


// let amy = new Node ('Amy')
// let bob = new Node ('Bob')
// let barb = new Node ('Barb')
// let barry = new Node ('Barry')

// amy.children.push(bob)
// amy.children.push(barb)
// amy.children.push(barry)
// console.log(amy)

// class Node {
//     constructor(val, children=[]){
//         this.val = val
//         this.children = children
//     }

//     findDFS(val){
//         const toVisitStack = [this];

//         while(toVisitStack.length){
//             const current = toVisitStack.pop();
//             console.log("VISITING:", current.val)

//             if(current.val === val){
//                 console.log('YUP')

//                 return current;
//             } else {console.log('NOPE')
//             }

//             for(let child of current.children){
//                 toVisitStack.push(child)
//             }
//         }
//     }

//     findBFS(val){
//         const toVisitQueue = [this];

//         while(toVisitQueue.length){
//             const current = toVisitQueue.shift();
//             console.log("VISITING:", current.val)

//             if(current.val === val){
//                 console.log('YUP')

//                 return current;
//              } else {
//                 console.log('NOPE')
//             } 

//             for(let child of current.children){
//                 toVisitQueue.push(child)
//             }
//         }
//     }
// }


// let nameTree = new Node('Amy', [
//     new Node('Bob', [
//         new Node('Carol', [
//             new Node('Daniel', [
//                 new Node('Edward'),
//                 new Node('Eric')
//             ]),
//             new Node('Derick')
//         ])
//     ]),
//     new Node('Barb', [
//         new Node('Carlos'),
//         new Node('Connie', [
//             new Node('Darlene'),
//             new Node('David', [
//                 new Node('Ellen'),
//                 new Node('Erica')
//             ])
//         ])
//     ]),
//     new Node('Barry', [
//         new Node('Consuela')
//     ])
// ]);

// console.log(nameTree.findBFS('Carlos'))
// console.log(nameTree.findDFS('Carlos'))

    

// let htmlEl = new Node('html', [
//     new Node('head', [new Node('title')]), 
//     new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])])
// ]);

// console.log(htmlEl.findDFS('li'))
// console.log(htmlEl.findBFS('li'))

// console.log(htmlEl)

// class Tree {
//     constructor(root){
//         this.root = root
//     }

//     findInTreeDFS(val){

//         return this.root.findDFS(val)
//     }

//     findInTreeBFS(val){
        
//         return this.root.findBFS(val)
//     }
// }

// const tree = new Tree(htmlEl)

// // console.log(tree.root)
// console.log(tree.findInTreeDFS('ul'))
// console.log(htmlEl.findDFS('ul'))

// class Node {
//     constructor (val, left=null, right =null){
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }

//     find (sought) {
//         let currentNode = this

//         while(currentNode){
//             console.log("Visiting:", currentNode.val)

//             if(currentNode.val === sought) return currentNode;

//             if(sought < currentNode.val){
//                 currentNode = currentNode.left
            
//             } else {
//                 currentNode = currentNode.right;
//             }
//         }
//     }
// }

// class BinarySearchTree {
//     constructor (root){
//         this.root = root;
//     }
//         // In Order Traversal
//     inOrderTraverse(node=this.root){
//        if(node.left) this.inOrderTraverse(node.left);
//         console.log(node.val)
//         if (node.right) this.inOrderTraverse(node.right)
//     }

//          // Pre Order Traversal
//     preOrderTraverse(node=this.root){
//         console.log(node.val);
//         if(node.left) this.preOrderTraverse(node.left);
//         if (node.right) this.preOrderTraverse(node.right)
//         }

//              // Pre Order Traversal
//     postOrderTraverse(node=this.root){
//         if(node.left) this.postOrderTraverse(node.left);
//         if (node.right) this.postOrderTraverse(node.right)
//         console.log(node.val);
//         }
//     }

// const E = new Node('E');
// const A = new Node('A');
// const B = new Node('B');
// const C = new Node('C');
// const D = new Node('D');
// const F = new Node('F');
// const G = new Node('G');

// E.left = B;
// E.right = G;
// B.left = A;
// B.right = D;
// G.left = F;

// const tree = new BinarySearchTree(E);

// console.log(tree.inOrderTraverse())
// console.log(tree.preOrderTraverse())
// console.log(tree.postOrderTraverse())

// this will consit of root node and methods we want to use
class BST{

    //constructor will be run whenever we create a new instance of the BST
    constructor(){
        this.root = null        // this means the root won't have a value until we assign it one
     }

     insert(value){

        // since we may be making multiple references to the new node, will define a variable
        const newNode = new Node(value)

        // these two lines are  saying that if there is no root node, the value that we insert when calling our insert method will become the root
    
        if(!this.root){
            this.root = newNode

            return this     // if we have to create a root node, this would return the whole tree (which is just a root node at this point)
        }

        //this is our current marker
        let current = this.root

        function addNode(){

            if(value === current.value) return undefined
            if(value < current.value){      // this is checking if the number we want to add is less than our current node

                if(!current.left){      // this is checking if there is NOT a left child attached to the current node

                    current.left = newNode      //if both statements are true, we insert our number (newNode) as the left child of our current node

                    return this     // this will break us out of the while loop
                }

                current = current.left      // if there was already a value at current.left, this will move the current marker to the next node.
                // this also ensures that the while loopo keeps looping until there is NOT a left child so that we can insert the new value there

                addNode()       // this moves our current node marker to a node that we can add to
            } else if(value > current.value){
                if(!current.right){
                    current.right = newNode
                    return this
                }
                
                current = current.right
                addNode()
            }
        }
        addNode()
     }

     insertRecursively(){

     }
}

// this will be used to create the nodes of the tree
class Node{

    //this constructor will consist of the 3 things
    constructor(value){
        this.value = value

        // like this.root = null. this means the left/right nodes don't have a value until we assign them one
        this.left = null        
        this.right = null
    }
}

// this is how we assign a value to the root
const tree = new BST()

// tree.root = new Node(20)
tree.insert(20)
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(30)
tree.insert(25)
tree.insert(32)

console.log(tree)

function find(value){

    // if there is no root, return false
    if(!this.root){
        return false
   }

   // this will allow us to change the node we look at to traverse down the tree
   let tree = this.root;

   // this while loop will work as long as the variable tree holds a value
   while(tree){

    // this code determines if the value we are looking for is less than the value we're currently pointing to. If the statement returns true, we move left down the tree.
    if(value < tree.value) {
        tree = tree.left;

    // this else if statement allows us to determine if the value is we're looking for is greater than the value of our pointer. If it is we move down the tree to the right
    } else if (value > tree.value) {
        tree = tree.right;

    // this else if statement tells us whether the value we're looking for is equal to the value we're currently pointing to. If it is, we return that value.
    } else if (tree.value === value) {
        return tree;
    }
   }

   // this will initialize once the tree variable has no value and will end the while loop
   return false
}

