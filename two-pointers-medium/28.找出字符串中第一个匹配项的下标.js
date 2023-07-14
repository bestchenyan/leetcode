/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  let [l, r] = [0, needle.length - 1];
  const w = r - l + 1;

  while (r < haystack.length) {
    let count = 0;
    for (let i = 0; i < w; i++) {
      if (haystack[i + l] != needle[i]) break;
      count++;
    }
    if (count == w) {
      return l;
    }
    l++;
    r++;
  }
  return -1;
};
// @lc code=end
