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

