function numRegions(graph) {
  let visited = new Set();
  let nodes = Object.keys(graph);
  let count = 0;

  nodes.forEach(node => {
    let currNode;
    let temp = [];
    let queue = [node];
    let check = false;

    while(queue.length) {
      currNode = queue.shift();

      if (visited.has(currNode)) {
        check = true;
        break;
      }

      if (temp.includes(currNode)) {
        break;
      }
      temp.push(currNode);
      queue.push(...graph[currNode])
    }

    temp.forEach(node => {
      visited.add(node);
    })

    if (!check) count++;

  })

  return count;

}

module.exports = {
    numRegions
};