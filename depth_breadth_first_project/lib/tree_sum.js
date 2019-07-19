function treeSum(root) {
  if (!root) return 0;

  let sum = 0;

  sum += treeSum(root.left);
  sum += treeSum(root.right);
  sum += root.val;

  return sum;

}


module.exports = {
    treeSum
};