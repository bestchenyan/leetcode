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
  let record = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const chartIndex = s.charCodeAt(i) - 97;
    record[chartIndex]++;
  }

  for (let i = 0; i < t.length; i++) {
    const chartIndex = t.charCodeAt(i) - 97;
    record[chartIndex]--;
  }

  for (let i = 0; i < record.length; i++) {
    if (record[i] !== 0) return false;
  }

  return true;
};

// @lc code=end
