/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let record = new Array(10).fill(null);
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!record[nums1[i]]) {
      record[nums1[i]] = true;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (record[nums2[i]]) res.push(nums2[i]);
  }
  return [...new Set(res)];
};
// @lc code=end
