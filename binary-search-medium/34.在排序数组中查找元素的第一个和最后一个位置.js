/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const left = findLeftBoundary(nums, target);
  const right = findRightBoundary(nums, target);
  if (left == -2 || right == -2) return [-1, -1];
  if (right - left > 1) return [left + 1, right - 1];
  return [-1, -1];
};

function findLeftBoundary(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  // 初始值为-2，避免target在num[0]的位置
  let leftBoundary = -2;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    // end值更新时，计算左边界
    if (nums[mid] >= target) {
      end = mid - 1;
      // 当mid为0时，仍旧没找到target，则target不在数组中，左边界为初始值-2
      if (mid == 0 && nums[mid] > target) {
        leftBoundary = -2;
      } else {
        leftBoundary = end;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    }
  }
  return leftBoundary;
}

function findRightBoundary(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  // 初始值为-2，避免target在num[0]的位置
  let rightBoundary = -2;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    // start值更新时，计算右边界
    if (nums[mid] <= target) {
      start = mid + 1;
      // 当mid为最后一位时，仍旧没找到target，则target不在数组中，右边界为初始值-2
      if (mid == nums.length - 1 && nums[mid] < target) {
        rightBoundary = -2;
      } else {
        rightBoundary = start;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return rightBoundary;
}

// @lc code=end
