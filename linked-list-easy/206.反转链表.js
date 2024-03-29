/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverse(null, head);
};
// 递归
function reverse(prev, cur) {
  if (!cur) return prev;
  let temp = cur.next;
  cur.next = prev;
  return reverse(cur, temp);
}
// @lc code=end

/**
 * 双指针
 */
var reverseList = function (head) {
  let temp;
  let cur = head;
  let prev = null;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};
