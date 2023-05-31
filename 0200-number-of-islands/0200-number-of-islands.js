function numIslands(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  function explore(row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === '0') {
      return;
	//if water or out of bounds then return 
    }

    grid[row][col] = '0'; // Mark as visited
	//change land to watter after explored 

//recursive call explore on adjacent 
    explore(row - 1, col); // Explore up
    explore(row + 1, col); // Explore down
    explore(row, col - 1); // Explore left
    explore(row, col + 1); // Explore right
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === '1') {
	//looking for land 
        explore(row, col);
        count++;
	//after finish exploring helper func incr count 
      }
    }
  }

  return count;
}
