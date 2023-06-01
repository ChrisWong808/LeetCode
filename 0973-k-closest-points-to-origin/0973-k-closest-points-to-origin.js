/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
      // Calculate the distance between each point and the origin
  const distances = points.map(([x, y]) => Math.sqrt(x * x + y * y));

  // Create an array of indices from 0 to points.length - 1
  const indices = Array.from({ length: points.length }, (_, i) => i);

  // Sort the indices based on their corresponding distances
  indices.sort((a, b) => distances[a] - distances[b]);

  // Create a result array with the k closest points
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(points[indices[i]]);
  }

  return result;
};