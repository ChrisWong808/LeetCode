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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
     let result = null;
  let count = 0;
  
  // Helper function for in-order traversal
  function inorder(node) {
    if (node === null) return;
    
    inorder(node.left);  // Traverse left subtree
    
    count++;  // Increment the count
    
    if (count === k) {
      result = node.val;  // Found the kth smallest value
      return;
    }
    
    inorder(node.right);  // Traverse right subtree
  }
  
  inorder(root);  // Start in-order traversal from the root
  
  return result;
};