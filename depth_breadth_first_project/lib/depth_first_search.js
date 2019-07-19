function depthFirstSearch(root, targetVal) {
  if (root.val === targetVal) return root;

  let node = null;

  if (root.left) {
    node = depthFirstSearch(root.left, targetVal)
    if (node) return node;
  }

  if (root.right) {
    node = depthFirstSearch(root.right, targetVal)
    if (node) return node;
  }

  return node;

}


module.exports = {
    depthFirstSearch
};