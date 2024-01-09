/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = Infinity;
  let subLength = 0;

  let minSubStr = "";

  const tMap = new Map();
  const sMap = new Map();

  let i = 0;

  for (let k = 0; k < t.length; k++) {
    tMap.set(t[k], (tMap.get(t[k]) || 0) + 1);
  }

  for (let j = 0; j < s.length; j++) {
    sMap.set(s[j], (sMap.get(s[j]) || 0) + 1);
    while (isCover(sMap, tMap)) {
      subLength = j - i + 1;
      if (subLength < result) {
        result = subLength;
        minSubStr = s.slice(i, j + 1);
      }
      sMap.set(s[i], sMap.get(s[i]) - 1);
      i++;
    }
  }

  return minSubStr;
};

function isCover(sMap, tMap) {
  let state = false;
  if (sMap.size < tMap.size) return state;
  for (let [k, v] of tMap) {
    if (!sMap.get(k) || sMap.get(k) < v) {
      state = false;
      break;
    } else if (sMap.get(k) >= v) {
      state = true;
    }
  }
  return state;
}
// @lc code=end
