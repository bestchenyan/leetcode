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
  if (needle.length == 0) return 0;

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

  const next = getNext(needle);
  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && needle[j] != haystack[i]) {
      j = next[j - 1];
    }
    if (needle[j] == haystack[i]) j++;
    if (j == needle.length) return i - j;
  }

  return -1;
};
// @lc code=end
