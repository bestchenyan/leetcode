/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0,
    r = x;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (mid * mid == x) return mid;
    if (mid * mid > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r;
};
/**
 * 牛顿迭代法
 * var mySqrt = function (x) {
  let a = x;
  while (Math.floor(a) * Math.floor(a) > x) {
    a = (a + x / a) / 2;
  }
  return Math.floor(a);
};
 */
// @lc code=end
