function findMinHeightTrees(n, edges) {
  if (n === 1) return [0]; // Special case for a single node tree

  const neighbors = new Array(n).fill(0).map(() => []); // Adjacency list
  const degrees = new Array(n).fill(0); // Degrees of nodes

  // Build the adjacency list and increment the degrees
  for (const [a, b] of edges) {
    neighbors[a].push(b);
    neighbors[b].push(a);
    degrees[a]++;
    degrees[b]++;
  }

  const leaves = [];

  // Enqueue the initial leaf nodes
  for (let i = 0; i < n; i++) {
    if (degrees[i] === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    const leavesSize = leaves.length;
    n -= leavesSize;

    const newLeaves = [];

    // Process the current layer of leaf nodes
    for (let i = 0; i < leavesSize; i++) {
      const leaf = leaves.shift();

      // Decrease the degrees and remove the leaf node from neighbors' adjacency lists
      for (const neighbor of neighbors[leaf]) {
        degrees[neighbor]--;
        if (degrees[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      }
    }

    leaves.push(...newLeaves);
  }

  return leaves;
}

