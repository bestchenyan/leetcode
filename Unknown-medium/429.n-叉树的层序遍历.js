/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
      res.push(node.val);
      for (let j = 0; j < node.children.length; j++) {
        if (node.children[j]) stack.push(node.children[j]);
      }
    }

    result.push(res);
  }

  return result;
};
// @lc code=end
