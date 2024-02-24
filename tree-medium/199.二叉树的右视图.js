/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  const queue = [],
    result = [];
  if (root != null) {
    queue.push(root);
  }

  while (queue.length) {
    const size = queue.length;
    let res;

    for (let k = 0; k < size; k++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (k === size - 1) res = node.val;
    }
    result.push(res);
  }

  return result;
};
// @lc code=end
