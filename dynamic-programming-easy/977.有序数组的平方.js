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
  let left = 0;
  let right = nums.length - 1;
  let k = right;
  let result = [];

  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      result[k--] = nums[right] ** 2;
      right--;
    } else {
      result[k--] = nums[left] ** 2;
      left++;
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
