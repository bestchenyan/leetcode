/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class HelperQueue {
    constructor() {
      this.queue = [];
    }

    pop(value) {
      const front = this.getFront();
      if (front === value) {
        this.queue.shift();
      }
    }
    push(value) {
      let back = this.queue[this.queue.length - 1];
      while (back != undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    getFront() {
      return this.queue[0];
    }
  }
  const result = [];

  const helperQueue = new HelperQueue();

  let i = 0,
    j = 0;

  while (j < k) {
    helperQueue.push(nums[j++]);
  }

  result.push(helperQueue.getFront());

  while (j < nums.length) {
    helperQueue.push(nums[j]);
    helperQueue.pop(nums[i]);
    result.push(helperQueue.getFront());
    i++;
    j++;
  }
  return result;
};

// @lc code=end
