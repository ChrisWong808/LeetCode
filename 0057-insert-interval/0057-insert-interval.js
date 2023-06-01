/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
      const result = [];

  let i = 0;
  const n = intervals.length;

  // Add all intervals that end before newInterval starts
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  // Add the updated newInterval
  result.push(newInterval);

  // Add the remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};