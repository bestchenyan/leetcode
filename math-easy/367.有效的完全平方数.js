/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0,
    r = num;
  while (l <= r) {
    const mid = (l + r) >> 1;
    const res = mid * mid;
    if (res == num) return true;
    if (res > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};

// @lc code=end
