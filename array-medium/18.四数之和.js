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
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    //   额外判断nums[i] >= 0是为了兼容负数的情况
    if (nums[i] > target && nums[i] >= 0) break;

    if (i > 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      //   额外判断 nums[i] + nums[j] >= 0是为了兼容负数的情况
      if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) break;
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      let left = j + 1,
        right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[right] == nums[right - 1]) right--;
          while (left < right && nums[left] == nums[left + 1]) left++;

          right--;
          left++;
        }
      }
    }
  }

  return result;
};
// @lc code=end
fourSum([2, 2, 2, 2, 2], 8);
