/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Base case: if either preorder or inorder array is empty, return null
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  // The first element in the preorder array is the root of the tree
  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);

  // Find the index of the root value in the inorder array
  const rootIndexInorder = inorder.indexOf(rootValue);

  // Split the inorder array into left and right subtrees based on the root index
  const leftInorder = inorder.slice(0, rootIndexInorder);
  const rightInorder = inorder.slice(rootIndexInorder + 1);

  // Split the preorder array into left and right subtrees based on the sizes of leftInorder and rightInorder arrays
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  // Recursively build the left and right subtrees
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};