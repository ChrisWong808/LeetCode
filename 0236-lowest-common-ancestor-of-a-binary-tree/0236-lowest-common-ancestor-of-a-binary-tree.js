class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    // If root is null or one of the nodes, return root
    return root;
  }

  // Recursively find LCA in the left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    // If nodes p and q are in different subtrees, return root
    return root;
  } else if (left) {
    // If both nodes are in the left subtree, return LCA from the left subtree
    return left;
  } else if (right) {
    // If both nodes are in the right subtree, return LCA from the right subtree
    return right;
  } else {
    // If nodes p and q are not found, return null
    return null;
  }
}
