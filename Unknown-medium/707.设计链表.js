/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class NodeList {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var MyLinkedList = function () {
  this._size = 0;

  this._head = null;
  this._tail = null;
};

MyLinkedList.prototype.getNode = function (index) {
  let node = this._head;
  while (index--) {
    node = node.next;
  }
  return node;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  const node = this.getNode(index);
  return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new NodeList(val, this._head);
  this._head = node;
  this._size++;
  if (!this._tail) {
    this._tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new NodeList(val);
  if (this._tail) {
    this._tail.next = node;
  } else {
    this._head = node;
  }
  this._tail = node;
  this._size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index === this._size) {
    this.addAtTail(val);
    return;
  }
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  const curNode = this.getNode(index - 1);
  const node = new NodeList(val, curNode.next);
  curNode.next = node;
  this._size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return;
  if (index === 0) {
    this._head = this._head.next;
    if (index === this._size - 1) {
      this._tail = this._head;
    }
    this._size--;
    return;
  }
  const node = this.getNode(index - 1);
  node.next = node.next.next;
  if (index === this._size - 1) {
    this._tail = node;
  }
  this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
