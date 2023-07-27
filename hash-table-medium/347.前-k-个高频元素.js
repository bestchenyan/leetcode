/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frepMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    frepMap.set(num, (frepMap.get(num) || 0) + 1);
  }

  for (let [num, frep] of frepMap) {
    bucket[frep] = (bucket[frep] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
};
// @lc code=end
