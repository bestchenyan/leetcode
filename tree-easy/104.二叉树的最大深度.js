/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  const queue = [],
    result = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const size = queue.length;
    const res = [];
    for (let k = 0; k < size; k++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      res.push(node.val);
    }
    result.push(res);
  }

  return result.length;
};
// @lc code=end
