/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const output = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let startx = 0,
    starty = 0;

  let loop = Math.floor(n / 2);
  let loopCount = 1;

  let count = 1;

  while (loop--) {
    for (; starty < n - loopCount; starty++) {
      output[startx][starty] = count++;
    }

    for (; startx < n - loopCount; startx++) {
      output[startx][starty] = count++;
    }

    for (; starty > loopCount - 1; starty--) {
      output[startx][starty] = count++;
    }
    for (; startx > loopCount - 1; startx--) {
      output[startx][starty] = count++;
    }
    startx++;
    starty++;
    loopCount++;
  }
  if (n % 2) {
    output[startx][starty] = count++;
  }

  return output;
};

// @lc code=end
