/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const left = "({[";
  const right = ")}]";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let rightIdx = right.indexOf(s[i]);
    if (~rightIdx) {
      if (stack.length === 0) return false;
      const index = left.indexOf(stack[stack.length - 1]);
      if (index === rightIdx) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
// @lc code=end
