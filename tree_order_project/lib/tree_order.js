function inOrderArray(root) {
  if (!root) return [];

  let arr = [];

  if (root.left) {
    arr = arr.concat(inOrderArray(root.left));
  }

  arr.push(root.val);

  if (root.right) {
    arr = arr.concat(inOrderArray(root.right));
  }

  return arr;

}

function postOrderArray(root) {
  if (!root) return [];

  let arr = [];

  if (root.left) {
    arr = arr.concat(postOrderArray(root.left));
  }

  if (root.right) {
    arr = arr.concat(postOrderArray(root.right));
  }

  arr.push(root.val);

  return arr;

}


module.exports = {
    inOrderArray,
    postOrderArray
};