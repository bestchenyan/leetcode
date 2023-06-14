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
  let k = 0;

  let startx = 0,
    i = 0,
    m = matrix.length;
  let starty = 0,
    j = 0,
    n = matrix[0].length;

  let offset = 1;

  let loop = Math.floor(Math.min(m, n) / 2);
  const mid = Math.floor(Math.min(m, n) / 2);

  while (loop--) {
    //
    for (i = startx, j = starty; j < n - offset; j++) {
      result[k++] = matrix[i][j];
    }
    //
    for (; i < m - offset; i++) {
      result[k++] = matrix[i][j];
    }
    //
    for (; j > starty; j--) {
      result[k++] = matrix[i][j];
    }
    //
    for (; i > startx; i--) {
      result[k++] = matrix[i][j];
    }
    startx++;
    starty++;
    offset++;
  }
  if (Math.min(m, n) % 2 === 1) {
    if (m > n) {
      for (let i = mid; i < m - mid; i++) {
        result[k++] = matrix[i][mid];
      }
    } else {
      for (let j = mid; j < n - mid; j++) {
        result[k++] = matrix[mid][j];
      }
    }
  }
  return result;
};
// @lc code=end
