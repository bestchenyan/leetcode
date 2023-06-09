/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 解法2
var sortedSquares = function (nums) {
  let result = [];
  let l = 0;
  let r = nums.length - 1;
  let k = r;

  while (l <= r) {
    if (nums[l] ** 2 < nums[r] ** 2) {
      result[k--] = nums[r--] ** 2;
    } else {
      result[k--] = nums[l++] ** 2;
    }
  }
  return result;
};
// @lc code=end
// 解法1
// var sortedSquares = function (nums) {
//   let k = nums.length - 1;
//   let result = [];
//   for (let i = 0, j = nums.length - 1; i <= j; ) {
//     if (nums[i] * nums[i] > nums[j] * nums[j]) {
//       result[k--] = nums[i] * nums[i];
//       i++;
//     } else {
//       result[k--] = nums[j] * nums[j];
//       j--;
//     }
//   }
//   return result;
// };
