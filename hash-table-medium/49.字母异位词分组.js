/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const records = strs.reduce((acc, cur) => {
    if (acc.length === 0) {
      acc.push([cur]);
    } else {
      for (let item of acc) {
        if (isAnagrams(item[0], cur)) {
          item.push(cur);
          return acc;
        }
      }
      acc.push([cur]);
    }
    return acc;
  }, []);

  return records;
};

function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const record = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    record[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
    record[str2.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let count of record) {
    if (count < 0) return false;
  }

  return true;
}
// @lc code=end
