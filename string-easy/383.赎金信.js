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
  if (ransomNote.length > magazine.length) return false;
  const letterArr = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    letterArr[magazine.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - "a".charCodeAt(0);
    letterArr[index]--;
    if (letterArr[index] < 0) return false;
  }
  return true;
};
// @lc code=end
