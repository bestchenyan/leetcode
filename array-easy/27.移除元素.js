/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let size = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[size] = nums[i];
      size++;
    }
  }
  return size;
};
// @lc code=end
