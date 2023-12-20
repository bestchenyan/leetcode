/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return backspaceStr(s) == backspaceStr(t);
};

function backspaceStr(str) {
  let arr = str.split("");
  const res = [];
  arr.forEach((element) => {
    if (element == "#") {
      res.pop();
    } else {
      res.push(element);
    }
  });
  return res.join("");
}
// @lc code=end
