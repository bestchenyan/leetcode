/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    k = i + k < s.length ? k : s.length - i;

    let l = i;
    let r = i + k - 1;

    while (l < r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
  }
  return s.join("");
};
// @lc code=end
