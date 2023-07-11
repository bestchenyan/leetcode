/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];

    const v = target - key;
    if (map.has(v)) return [i, map.get(v)];

    if (!map.has(key)) {
      map.set(key, i);
    }
  }
  return [];
};
// @lc code=end
