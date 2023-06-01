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
var isValidBST = function(root) {
     return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
  // Base case: an empty tree or leaf node is a valid BST
  if (node === null) {
    return true;
  }
  
  // Check if the current node violates the BST conditions
  if (node.val <= min || node.val >= max) {
    return false;
  }
  
  // Recursively validate the left and right subtrees
  return (
    validate(node.left, min, node.val) &&
    validate(node.right, node.val, max)
  );
};