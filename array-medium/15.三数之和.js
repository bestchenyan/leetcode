/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] == 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[right] == nums[right - 1]) right--;
        while (left < right && nums[left] == nums[left + 1]) left++;
        right--;
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      }
    }
  }

  return result;
};
// @lc code=end
