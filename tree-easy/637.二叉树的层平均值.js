/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const stack = [],
    result = [];
  if (root !== null) {
    stack.push(root);
  }

  while (stack.length) {
    const size = stack.length;
    const res = [];

    for (let k = 0; k < size; k++) {
      const node = stack.shift();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);

      res.push(node.val);
    }
    const average = res.reduce((sum, cur) => sum + cur, 0) / res.length;
    result.push(average);
  }

  return result;
};
// @lc code=end
