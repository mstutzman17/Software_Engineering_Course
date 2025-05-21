export function getElementById(root, id) {
    let result = null;
  
    function search(node) {
      if (!node || result) return;
      if (node.id === id) {
        result = node;
        return;
      }
  
      // General tree: node.children
      // Binary tree: node.left and node.right
      if (node.children) {
        for (let child of node.children) search(child);
      } else {
        if (node.left) search(node.left);
        if (node.right) search(node.right);
      }
    }
  
    search(root);
    return result;
  }
  



  export function getElementsByTagName(root, tagName) {
    const result = [];
  
    function search(node) {
      if (!node) return;
  
      if (node.tag && node.tag.toLowerCase() === tagName.toLowerCase()) {
        result.push(node);
      }
  
      if (node.children) {
        for (let child of node.children) search(child);
      } else {
        if (node.left) search(node.left);
        if (node.right) search(node.right);
      }
    }
  
    search(root);
    return result;
  }



  export function getElementsByClassName(root, className) {
    const result = [];
  
    function search(node) {
      if (!node) return;
  
      if (node.classList && node.classList.has(className)) {
        result.push(node);
      }
  
      if (node.children) {
        for (let child of node.children) search(child);
      } else {
        if (node.left) search(node.left);
        if (node.right) search(node.right);
      }
    }
  
    search(root);
    return result;
  }