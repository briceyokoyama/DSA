function maxValue(node, visited=new Set()) {
  let queue = [node];
  let max = node.val;
  let currNode;

  while (queue.length) {
    currNode = queue.shift();

    if (visited.has(currNode)) continue;

    visited.add(currNode);

    if (currNode.val > max) {
      max = currNode.val;
    }

    queue.push(...currNode.neighbors);

  }

  return max;
}

module.exports = {
    maxValue
};