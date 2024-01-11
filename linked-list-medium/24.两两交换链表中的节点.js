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
  const dummyHead = new ListNode(0, head);
  let prev = dummyHead;
  let cur = head;
  let temp;
  while (cur && cur.next) {
    temp = cur.next;
    prev.next = temp;
    cur.next = temp.next;
    temp.next = cur;

    prev = cur;
    cur = cur.next;
  }
  return dummyHead.next;
};
// @lc code=end
