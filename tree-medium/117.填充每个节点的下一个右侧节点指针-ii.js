/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const size = queue.length;
    let preNode, node;

    for (let k = 0; k < size; k++) {
      if (k == 0) {
        preNode = queue.shift();
        node = preNode;
      } else {
        node = queue.shift();

        preNode.next = node;
        preNode = preNode.next;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};
// @lc code=end
