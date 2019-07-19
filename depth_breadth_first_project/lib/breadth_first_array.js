function breadthFirstArray(root) {
  let array = [];
  let queue = [root];
  let currNode;


  while (queue.length) {
    currNode = queue.shift();
    array.push(currNode.val);
    if (currNode.left) queue.push(currNode.left)
    if (currNode.right) queue.push(currNode.right)
  }
  return array;
}

module.exports = {
    breadthFirstArray
};