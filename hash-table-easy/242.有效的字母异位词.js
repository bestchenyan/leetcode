/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const record = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    record[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    record[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < record.length; i++) {
    if (record[i] !== 0) return false;
  }

  return true;
};

// @lc code=end
