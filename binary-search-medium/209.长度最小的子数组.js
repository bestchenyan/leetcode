/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = Infinity;
  let subLength = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      subLength = end - start + 1;
      result = Math.min(result, subLength);
      sum -= nums[start++];
    }
  }

  return result == Infinity ? 0 : result;
};

// @lc code=end
