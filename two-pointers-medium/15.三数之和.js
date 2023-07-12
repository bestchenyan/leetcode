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
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const value = nums[i] + nums[left] + nums[right];
      if (value > 0) {
        right--;
      } else if (value < 0) {
        left++;
        continue;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[right] == nums[right - 1]) right--;
        while (left < right && nums[left] == nums[left + 1]) left--;

        left++;
        right--;
      }
    }
  }
  return res;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// @lc code=end
