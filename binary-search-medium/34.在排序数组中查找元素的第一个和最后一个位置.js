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
  const leftBoundary = getLeftBoundary(nums, target);
  const rightBoundary = getRightBoundary(nums, target);
  if (leftBoundary === -2 || rightBoundary === -2) return [-1, -1];
  if (rightBoundary - leftBoundary > 1)
    return [leftBoundary + 1, rightBoundary - 1];
  return [-1, -1];
};

function getLeftBoundary(nums, target) {
  let start = 0,
    mid = 0,
    end = nums.length - 1,
    leftBoundary = -2;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] >= target) {
      end = mid - 1;
      leftBoundary = end;
    } else {
      start = mid + 1;
    }
  }
  return leftBoundary;
}

function getRightBoundary(nums, target) {
  let start = 0,
    mid = 0,
    end = nums.length - 1,
    rightBoundary = -2;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] <= target) {
      start = mid + 1;
      rightBoundary = start;
    } else {
      end = mid - 1;
    }
  }
  return rightBoundary;
}
// @lc code=end
