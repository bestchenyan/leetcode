/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const [small, large] =
    nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];

  const map = new Map();
  for (let k of large) {
    map.set(k, (map.get(k) || 0) + 1);
  }

  return small.reduce((acc, cur) => {
    if (map.get(cur) && map.get(cur) > 0) {
      acc.push(cur);
      map.set(cur, map.get(cur) - 1);
    }
    return acc;
  }, []);
};
// @lc code=end
