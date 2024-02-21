/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const traversal = (treeNode, result) => {
    if (!treeNode) return;
    traversal(treeNode.left, result);
    traversal(treeNode.right, result);
    result.push(treeNode.val);
  };
  const res = [];
  traversal(root, res);
  return res;
};
// @lc code=end
