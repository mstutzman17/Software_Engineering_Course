/** BinaryTreeNode: node for a general tree. */

export class binaryTreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  export class binaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */
  
    minDepth() {
      if(!this.root) return 0;  //if the tree is empty, return 0;

      // Queue will hold objects with node and its depth
      let queue = [{node: this.root, depth: 1}];  //each item in the queue has node and depth

      while (queue.length > 0) {  // this continues the loop as long as there nodes left to proceess
        const {node, depth} = queue.shift();  //removes the first item in queue and notes the node and depth

        if (!node.left && !node.right) { // this will determine if its a leaf node. if it is, depth is returned
          return depth;
        }

        // Add children to the queue with incremented depth
        if (node.left) queue.push({node: node.left, depth: depth + 1});
        if (node.right ) queue.push({node: node.right, depth: depth + 1});
      }
    }
  
    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */
  
    maxDepth() {
      if (!this.root) return 0;
    
      let queue = [{ node: this.root, depth: 1 }];
      let max = 0;
    
      while (queue.length > 0) {
        const { node, depth } = queue.shift();
    
        // Update max depth as we go
        if (depth > max) {
          max = depth;
        }
    
        // Add children with incremented depth
        if (node.left) queue.push({ node: node.left, depth: depth + 1 });
        if (node.right) queue.push({ node: node.right, depth: depth + 1 });
      }
    
      return max;
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */
    
  maxSum() {
  let result = -Infinity;  // Holds the best path sum found anywhere in the tree

  function helper(node) {
    if (!node) return 0;

    // Recursively calculate max gain from left and right subtrees
    const leftGain = Math.max(0, helper(node.left));
    const rightGain = Math.max(0, helper(node.right));

    // Current path sum through this node (including both sides)
    const currentPathSum = node.val + leftGain + rightGain;

    // Update global max if the current path sum is larger
    result = Math.max(result, currentPathSum);

    // Return max gain if continuing the path from this node
    return node.val + Math.max(leftGain, rightGain);
  }

  helper(this.root);
  return result;
}

  
    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */
  
    nextLarger(lowerBound) {
      if (!this.root) return null;  // if tree is empty, cancel the search
    
      let queue = [this.root];  // starts a queue intially only contatining the root node
      let result = null; // this will hold the smallest number found, that is < lowerBound
    
      while (queue.length > 0) {  // this allows level by level search of whole tree
        const node = queue.shift(); // removes first node from tree and stores in node (this becomes the node we are currently examining)
    
        if (node.val > lowerBound) {  // this is the logic to check if the node we are currently looking at is bigger or smaller than lowerBound. If smaller, it is stored in the result variable
          if (result === null || node.val < result) {
            result = node.val;
          }
        }
    
        // add left and right children to the queue
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    
      return result;
    }

    /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {
      if (!this.root || node1 === node2) return false; // if nodes the same or tree empty, return false
    
      const queue = [[this.root, null, 0]]; // [node, parent, depth] starting with root node (null)
      
      // these variables will store info about node1 and node2. each will become an object
      let info1 = null; 
      let info2 = null;
    
      while (queue.length) {
        const [current, parent, depth] = queue.shift();
    
        // if we find node1 or node2, store the parent and depth into info1 and info2 respectively
        if (current === node1) info1 = { parent, depth };
        if (current === node2) info2 = { parent, depth };
    
        if (info1 && info2) break;  // if we find that the nodes are cousins at this point, we stop the while loop early
    
        // if there is a left or right child, we add them to the queue to process later
        if (current.left) queue.push([current.left, current, depth + 1]);
        if (current.right) queue.push([current.right, current, depth + 1]);
      }
    
      if (!info1 || !info2) return false; // if either node was not found, return false
    
      // if the nodes are at the same depth AND have different parents, we return true. otherwise, false.
      return (
        info1.depth === info2.depth && info1.parent !== info2.parent
      );
    }
    

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  serialize(tree) {
    if (!tree.root) return "";
  
    let result = [];
    let queue = [tree.root];
  
    while (queue.length) {
      let node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push("null");
      }
    }
  
    return result.join(",");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  deserialize(stringTree) {
    if (!stringTree) return new binaryTree();   // if input string empty, return an empty tree

    const values = stringTree.split(','); // convert input string into array of strings using commas to separate values.

    function buildTree() {  // recursive function that builds tree one node at a time
      if (values.length === 0) return null;   // safety check if we run out of values

      const val = values.shift();   // take next value from front of values array

      if (val === 'null') return null;    // if value null, there's no node here. Return null to represent missing child

      const node = new binaryTreeNode(parseInt(val));   // if value is number, create new binary tree with that number
      node.left = buildTree();    // recursively build left subtree. This will consume next vals of array
      node.right = buildTree();   // recursively build right subtree. This will consume next vals of array

      return node;    // return constructed node with left/right children attached
    }

    return new binaryTree(buildTree());   //start building tree from root then wrap in binaryTree object and return it
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
    // Helper function to recursively search for louwest common ancestor (LCA)
    function findLCA(current){
      if (!current) return null;    // if node is null, we're at the bottom of a branch

      // if current node is either node1 or node2, reutrn it
      if (current === node1 || current === node2) return current;

      // Recursively search in left and right subtrees
      const left = findLCA(current.left);   // LCA in the left subtree
      const right = findLCA(current.right);     // LCA in the right subtree

      // if we find one node in each subtree, current is the lCA
      if (left && right) return current;

      // otherwise, return whichever side had a result (or null if neither)
      return left || right;
    }

    // start searching from the root of the tree\
    return findLCA(this.root);
  }
}

  
  let root = new binaryTreeNode('FamilyTree',
    new binaryTreeNode('Noah',
      new binaryTreeNode('Moses',
        new binaryTreeNode('Alice',
          new binaryTreeNode('Evelyn'),
          new binaryTreeNode('Lydia',
            new binaryTreeNode('Aaron',
              new binaryTreeNode('Jacob')
            )
          )
        )
      )
    )
  );
  
const familyTree = new binaryTree(root)
console.log(familyTree.minDepth())
console.log(familyTree.maxDepth())
console.log(familyTree.maxSum())
console.log(familyTree.nextLarger('Ahr'))
console.log(familyTree.areCousins('Alice', 'Moses'))
console.log(familyTree.serialize(familyTree))
console.log(familyTree.deserialize('FamilyTree,Noah,null,Moses,null,Alice,null,Evelyn,Lydia,null,null,Aaron,null,Jacob,null,null,null'))
console.log(familyTree.lowestCommonAncestor('Noah', 'Lydia'))