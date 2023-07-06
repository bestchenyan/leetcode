/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
/**
 * 将一个数组转为链表
 * @param {array} array
 * @return {ListNode}
 */
const getListFromArray = (array) => {
  let dummy = new ListNode();
  let pre = dummy;
  array.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
};

var getIntersectionNode = function (headA, headB) {
  let lenA = 0,
    lenB = 0;
  let curA = headA,
    curB = headB;

  let sub = 0;

  while (curA) {
    lenA++;
    curA = curA.next;
  }

  while (curB) {
    lenB++;
    curB = curB.next;
  }

  sub = Math.abs(lenA - lenB);
  curA = headA;
  curB = headB;

  while (sub--) {
    if (lenA < lenB) curB = curB.next;
    if (lenA > lenB) curA = curA.next;
  }

  while (curA) {
    if (curA == curB) return curA;
    curA = curA.next;
    curB = curB.next;
  }

  return null;
};

// console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]));
// @lc code=end
