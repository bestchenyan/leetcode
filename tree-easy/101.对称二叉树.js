/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  //   return compare(root.left, root.right);
  const queue = [root.left, root.right];

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left == null && right == null) continue;

    if ((!left && right) || (left && !right) || left.val !== right.val) {
      return false;
    }
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
};

/** 1. 递归函数参数及返回值类型
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
function compare(left, right) {
  // 2. 循环终止条件
  if (left != null && right == null) return false;
  else if (left == null && right != null) return false;
  else if (left == null && right == null) return true;
  else if (left.val != right.val) return false;
  // 3. 确定单层递归逻辑
  // （外侧是否相等）比较左树的左侧，和右树的右侧
  const outside = compare(left.left, right.right);
  // （内侧是否相等）比较左树的右侧，和右树的左侧
  const inside = compare(left.right, right.left);

  return outside && inside;
}
// @lc code=end
