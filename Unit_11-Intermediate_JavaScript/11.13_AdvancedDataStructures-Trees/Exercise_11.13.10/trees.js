export class treeNode {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
  }
  
  export class tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues() {
    if (!this.root) return 0;   // if the tree is empty the method stops running

    let total = 0;  // this will store the sum of values
    const stack = [this.root]; // this ensures we start with the root

    while (stack.length > 0) {  // this initializes a stack with starting with the root node
        const current = stack.pop();    // this makes the last added node the current node
        total += current.val; // this keeps a total of the nodes added so far

        // Push children to the stack
        for (const child of current.children) { // this loops through all the children of the current node
            stack.push(child);  // this adds each child to the stack so they will be processed later
        }
    }

    return total;   // this returns the total after the whole tree has been traversed

}
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens() {
        if(!this.root) return 0;    // if the tree is empty the method stops running

        let evenCount = 0; // this will keep track of the even nodes
        const stack = [this.root];  // this starts with the root node in the stack

        while (stack.length > 0) {
            const current = stack.pop();    // changes the last node added to the current node

        if (current.val % 2 === 0) {    // this checks if the nodes value is even
            evenCount++ // if nodes value IS even, this increases the count by one
        }

        // Push all children of the current node onto thte stack
        for (const child of current.children) {
            stack.push(child);
        }
        }

        return evenCount;
    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound) {
        if(!this.root) return 0; // If there is no root node, the method stops running

        let count = 0;  // stores the number of nodes greater than lowerBound
        const stack = [this.root];  // creates a stack starting with the root node

        while (stack.length > 0) {
            const current = stack.pop();    // changes the last node added, to the current node

        if (current.val > lowerBound) {
            count++; // This increases the count by one IF the current value is greater than the lowerBound
        }

        for (const child of current.children) {
            stack.push(child)
        }
        }

        return count;
    }
  }

const root = new treeNode(17, [
    new treeNode(1283, [
      new treeNode(38),
      new treeNode(409, [
        new treeNode(344),
        new treeNode(86, [
          new treeNode(489, [
            new treeNode(895),
            new treeNode(480)
          ])
        ])
      ])
    ])
  ]);

  const integerTree = new tree(root)

  console.log (integerTree)
  console.log(integerTree.sumValues())
  console.log (integerTree.countEvens())
  console.log (integerTree.numGreater(45))