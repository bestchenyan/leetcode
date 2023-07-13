/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = Array.from(s);

  let [i, j] = [0, 0];

  while (i < s.length) {
    if (s[i] !== " ") {
      s[j++] = s[i];
    }
    if (j > 0 && s[j - 1] !== " " && s[i] === " ") {
      s[j++] = s[i];
    }
    i++;
  }
  s.length = s[j - 1] === " " ? j - 1 : j;

  // 翻转字符串
  let [l, r] = [0, s.length - 1];
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }

  for (let k = 0, g = 0; k <= s.length; k++) {
    if (s[k] == " " || k == s.length) {
      let [l, r] = [g, k - 1];
      while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
      }
      g = k + 1;
    }
  }

  return s.join("");
};
// @lc code=end
