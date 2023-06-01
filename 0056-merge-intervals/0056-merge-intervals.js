/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
     // Sort the intervals by their start times
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] <= currentInterval[1]) {
      // Overlapping intervals, merge them by updating the end time
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {
      // Non-overlapping interval, add the current merged interval and update the current interval
      merged.push(currentInterval);
      currentInterval = interval;
    }
  }

  // Add the last merged interval
  merged.push(currentInterval);

  return merged;
};