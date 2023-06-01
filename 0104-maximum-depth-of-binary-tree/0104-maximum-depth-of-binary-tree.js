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
var maxDepth = function(root) {
    //edge case empty
    if (root === null) {
        return 0
       }
        
    const L = maxDepth(root.left);
    const R = maxDepth(root.right);
    
    return Math.max(L, R) + 1;
};