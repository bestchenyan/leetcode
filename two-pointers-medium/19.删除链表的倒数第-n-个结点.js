/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 双指针
var removeNthFromEnd = function (head, n) {
  const dummtyHead = new ListNode(0, head);
  let slow = dummtyHead,
    fast = dummtyHead;

  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummtyHead.next;
};
// @lc code=end

// 空间换时间 O(n)
// var removeNthFromEnd = function (head, n) {
//   const dummtyHead = new ListNode(0, head);
//   let cur = head;
//   const nodes = [];

//   while (true) {
//     nodes.push(cur);

//     while (!cur.next) {
//       const len = nodes.length;
//       if (n <= len) {
//         const next = nodes[len - n].next;
//         const prev = nodes[len - n - 1] || dummtyHead;
//         prev.next = next;
//       }
//       return dummtyHead.next;
//     }
//     cur = cur.next;
//   }
// };
