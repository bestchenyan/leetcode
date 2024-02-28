/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return getMaxDepth(root);
};
/**
 * 1. 函数参数与返回值
 * @param {Node|null} root
 * @return {number}
 */
function getMaxDepth(root) {
  // 2. 递归终止条件
  if (!root.children || root.children.length === 0) return 1;
  // 3. 单层函数执行逻辑
  const depth = root.children.map((child) => getMaxDepth(child));
  return 1 + Math.max(...depth);
}
// @lc code=end
