/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let list = new ListNode(0, head);
  let prev = list;
  let cur = list.next;
  while (cur) {
    let temp = cur.next;
    if (!temp) break;
    cur.next = temp.next;
    temp.next = cur;
    prev.next = temp;
    prev = cur;
    cur = cur.next;
  }
  return list.next;
};
// @lc code=end
