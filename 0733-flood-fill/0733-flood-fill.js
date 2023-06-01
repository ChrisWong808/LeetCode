/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  const startColor = image[sr][sc];

  // If the starting pixel already has the desired color, no changes are needed
  if (startColor === color) {
    return image;
  }

  const dfs = (image, row, col) => {
    // Check if the current pixel is within the image boundaries and has the same color as the starting pixel
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== startColor) {
      return;
    }

    // Update the color of the current pixel
    image[row][col] = color;

    // Recursively call DFS for the neighboring pixels (up, down, left, right)
    dfs(image, row - 1, col); // up
    dfs(image, row + 1, col); // down
    dfs(image, row, col - 1); // left
    dfs(image, row, col + 1); // right
  };

  dfs(image, sr, sc);
  return image;
}
