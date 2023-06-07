/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[j];
      nums[j++] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
};
// @lc code=end

/**
 * @description 两次循环
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let size = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[size++] = nums[i];
    }
  }
  for (let i = size; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
