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
  let magazineMap = new Map();
  let ransomNoteMap = new Map();

  for (const letter of magazine) {
    magazineMap.set(letter, (magazineMap.get(letter) || 0) + 1);
  }

  for (const letter of ransomNote) {
    ransomNoteMap.set(letter, (ransomNoteMap.get(letter) || 0) + 1);
  }

  for (const [key, value] of ransomNoteMap) {
    if (!magazineMap.get(key)) return false;
    const count = magazineMap.get(key);
    if (value > count) return false;
  }
  return true;
};
// @lc code=end
