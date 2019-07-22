function breadthFirstSearch(startingNode, targetVal) {
  let visited = new Set();
  let queue = [startingNode];
  let currNode;

  while (queue.length) {
    currNode = queue.shift();

    if (visited.has(currNode)) continue;

    visited.add(currNode)

    if (currNode.val === targetVal) return currNode;

    queue.push(...currNode.neighbors);
  }
  return null;
}

module.exports = {
    breadthFirstSearch
};