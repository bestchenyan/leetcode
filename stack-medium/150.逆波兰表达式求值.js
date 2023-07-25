/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operators = "+-*/";

  for (let token of tokens) {
    let index = operators.indexOf(token);
    if (~index) {
      const [b, a] = [stack.pop(), stack.pop()];
      if (token === "+") stack.push(a + b);
      if (token === "-") stack.push(a - b);
      if (token === "*") stack.push(a * b);
      if (token === "/") stack.push(Math.trunc(a / b));
    } else {
      stack.push(+token);
    }
  }
  return stack.pop();
};
// @lc code=end
