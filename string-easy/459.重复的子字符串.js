/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const getNext = (str) => {
    let j = 0;
    let next = [j];

    for (let i = 1; i < str.length; i++) {
      while (j > 0 && str[j] != str[i]) {
        j = next[j - 1];
      }
      if (str[j] == str[i]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  };
  const next = getNext(s);
  if (
    next[next.length - 1] &&
    s.length % (s.length - next[next.length - 1]) == 0
  )
    return true;
  return false;
};
// @lc code=end
