/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let results = [];

  for (let k = 0; k < nums.length - 3; k++) {
    if (k > 0 && nums[k] == nums[k - 1]) continue;

    for (let i = k + 1; i < nums.length - 2; i++) {
      if (i > k + 1 && nums[i] == nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[k] + nums[i] + nums[left] + nums[right];
        if (sum > target) {
          right--;
          continue;
        }
        if (sum < target) {
          left++;
          continue;
        }

        results.push([nums[k], nums[i], nums[left], nums[right]]);
        while (left < right && nums[right] == nums[--right]);
        while (left < right && nums[left] == nums[++left + 1]);
      }
    }
  }

  return results;
};
// @lc code=end
