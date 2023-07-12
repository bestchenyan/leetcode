/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;
  for (let i of nums1) {
    for (let j of nums2) {
      const sum = i + j;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for (let k of nums3) {
    for (let l of nums4) {
      const key = 0 - (k + l);
      if (map.get(key)) {
        count += map.get(key);
      }
    }
  }

  return count;
};
// @lc code=end
