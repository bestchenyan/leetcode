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
  let a = x;
  while (Math.floor(a) * Math.floor(a) > x) {
    a = (a + x / a) / 2;
  }
  return Math.floor(a);
};
// console.log(mySqrt(8));
// @lc code=end
