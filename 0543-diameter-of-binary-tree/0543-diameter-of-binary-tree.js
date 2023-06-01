/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  // Helper function to calculate the height of a node
  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the diameter if the sum of left and right heights is greater
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the maximum height between the left and right subtrees
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
