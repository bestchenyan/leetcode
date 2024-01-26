/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (n !== 1) {
    set.add(n);
    n = String(n)
      .split("")
      .reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    if (set.has(n)) return false;
  }
  return true;
};
// @lc code=end
