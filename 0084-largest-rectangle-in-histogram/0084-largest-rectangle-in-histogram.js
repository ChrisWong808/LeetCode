/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []; // stack to store indices of increasing heights
  let maxArea = 0;

  // Iterate over the heights array, including an extra 0 at the end to handle all heights
  for (let i = 0; i <= heights.length; i++) {
    // If the current height is greater than the height at the top of the stack, push its index to the stack
    if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      // If the current height is less than the height at the top of the stack, calculate the area of the rectangle
      // formed by the height at the top of the stack and the previous index, and update the maximum area
      const topIndex = stack.pop();
      const area = heights[topIndex] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
      maxArea = Math.max(maxArea, area);
      i--; // Decrement the index to process the current height again
    }
  }

  return maxArea;
};