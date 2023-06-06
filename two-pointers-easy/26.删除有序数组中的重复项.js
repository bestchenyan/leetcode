/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let size = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[size] != nums[i]) {
      nums[++size] = nums[i];
    }
  }
  return size + 1;
};
// @lc code=end
