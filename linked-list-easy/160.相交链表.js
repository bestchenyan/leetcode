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

var getIntersectionNode = function (headA, headB) {
  let lenA = 0,
    lenB = 0;
  let curA = headA,
    curB = headB;

  while (curA) {
    lenA++;
    curA = curA.next;
  }

  while (curB) {
    lenB++;
    curB = curB.next;
  }

  curA = headA;
  curB = headB;

  if (lenA < lenB) {
    [lenA, lenB] = [lenB, lenA];
    [curA, curB] = [curB, curA];
  }

  let n = lenA - lenB;

  while (n--) {
    curA = curA.next;
  }

  while (curA) {
    if (curA == curB) return curA;
    curA = curA.next;
    curB = curB.next;
  }

  return null;
};

// @lc code=end
