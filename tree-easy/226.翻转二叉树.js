/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const size = queue.length;
    for (let k = 0; k < size; k++) {
      const node = queue.shift();
      [node.left, node.right] = [node.right, node.left];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end
/**
 * 递归实现
 */
// function invertTree(root) {
//   if (root == null) return root;
//   [root.left, root.right] = [root.right, root.left];
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// }
