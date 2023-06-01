/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
  const cols = board[0].length;

  const dfs = (row, col, index) => {
    // If index reaches the end of the word, it means we found a match
    if (index === word.length) {
      return true;
    }

    // Check if the current cell is out of bounds or doesn't match the current letter
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Temporarily mark the current cell as visited
    const temp = board[row][col];
    board[row][col] = '#';

    // Explore the neighboring cells in a recursive manner
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Restore the cell to its original value
    board[row][col] = temp;

    return found;
  };

  // Iterate through each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        // If a match is found, return true
        return true;
      }
    }
  }

  // If no match is found, return false
  return false;
};