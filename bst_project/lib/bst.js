class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
     this.root = null;
   }

   insert(val, root = this.root) {

    let newNode = new TreeNode(val);

     if (!this.root) {
      this.root = newNode;
      return;
     }

    if (!root) {
      root = newNode;
      return root;
    }

    if (val < root.val) {
      if (root.left) {
      this.insert(val, root.left);
      } else {
      root.left = newNode;
      }
    } else {
      if (root.right) {
        this.insert(val, root.right);
      } else {
        root.right = newNode;
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;
    if (root.val === val) return true;

    if (val < root.val) {
      return this.searchRecur(val, root.left)
    } else {
      return this.searchRecur(val, root.right);
    }
  }

  searchIter(val) {
    if (!this.root) return false;

    let nodes = [this.root];
    let currNode;

    while (nodes.length) {
      currNode = nodes.shift();

      if (currNode.val === val) return true;

      if (currNode.left) nodes.push(currNode.left);
      if (currNode.right) nodes.push(currNode.right);

    }
    return false;
  }
}

module.exports = {
    TreeNode,
    BST
};