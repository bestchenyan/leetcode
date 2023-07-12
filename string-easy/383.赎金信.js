/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let letterArr = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    const code = magazine.charCodeAt(i);
    letterArr[code - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const code = ransomNote.charCodeAt(i);
    letterArr[code - 97]--;
    if (letterArr[code - 97] < 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end
