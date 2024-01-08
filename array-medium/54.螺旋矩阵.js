/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  const m = matrix.length;
  const n = matrix[0].length;

  let startx = 0,
    starty = 0;

  let loop = Math.floor(Math.min(m, n) / 2);
  let offset = 0;

  let index = 0;

  while (loop--) {
    for (; starty < n - offset - 1; starty++) {
      result[index++] = matrix[startx][starty];
    }

    for (; startx < m - offset - 1; startx++) {
      result[index++] = matrix[startx][starty];
    }

    for (; starty > offset; starty--) {
      result[index++] = matrix[startx][starty];
    }

    for (; startx > offset; startx--) {
      result[index++] = matrix[startx][starty];
    }

    startx++;
    starty++;

    offset++;
  }

  if (Math.min(m, n) % 2 == 0) return result;

  if (m == n) {
    result[index++] = matrix[startx][starty];
  } else {
    const restCont = Math.abs(m - n) + 1;
    if (m > n) {
      for (let i = 0; i < restCont; i++) {
        result[index++] = matrix[startx++][starty];
      }
    } else {
      for (let i = 0; i < restCont; i++) {
        result[index++] = matrix[startx][starty++];
      }
    }
  }

  return result;
};
// @lc code=end
