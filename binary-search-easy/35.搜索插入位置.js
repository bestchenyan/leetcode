/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(array, target, start, end) {
  if (start > end) return start;
  const mid = Math.floor((start + end) / 2);

  //   find target
  if (array[mid] === target) return mid;

  //   search the left side
  if (array[mid] > target) return binarySearch(array, target, start, mid - 1);

  //   search the right side
  if (array[mid] < target) return binarySearch(array, target, mid + 1, end);
}
// @lc code=end
