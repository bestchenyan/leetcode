/*
 * @lc app=leetcode.cn id=59 lang=yavascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let count = 1;
  let result = Array.from(new Array(n), () => new Array(n).fill(0));
  let startx = 0,
    starty = 0;

  let offset = 1;

  let x, y;

  let loop = Math.floor(n / 2);
  const mid = Math.floor(n / 2);

  while (loop--) {
    for (x = startx, y = starty; y < n - offset; y++) {
      result[x][y] = count++;
    }
    for (; x < n - offset; x++) {
      result[x][y] = count++;
    }

    for (; y > starty; y--) {
      result[x][y] = count++;
    }

    for (; x > startx; x--) {
      result[x][y] = count++;
    }

    startx++;
    starty++;
    offset++;
  }

  if (n % 2 === 1) {
    result[mid][mid] = count;
  }

  return result;
};
// @lc code=end
