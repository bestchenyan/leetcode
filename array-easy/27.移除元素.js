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
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) {
      for (let j = i; j < size; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
      size--;
    }
  }
  return size;
};
// @lc code=end
