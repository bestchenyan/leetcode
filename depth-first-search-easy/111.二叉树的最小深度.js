/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  if (root.left == null && root.right != null) {
    return 1 + rightDepth;
  }

  if (root.left != null && root.right == null) {
    return 1 + leftDepth;
  }

  return 1 + Math.min(leftDepth, rightDepth);
};
// @lc code=end
