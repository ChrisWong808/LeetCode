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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function isBalanced(root) {
  if (root === null) {
    // An empty tree is considered height-balanced.
    return true;
  }

  // Check the height difference between the left and right subtrees.
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }

  // Recursively check if both subtrees are height-balanced.
  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node) {
  if (node === null) {
    return 0;
  }

  // Recursively calculate the height of the tree.
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}
