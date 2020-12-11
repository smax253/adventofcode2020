const fs = require("fs");

function checkVisible(i, j, grid) {
  let count = 0;
  for (
    let tempi = i + 1, tempj = j + 1;
    tempi < grid.length && tempj < grid[0].length;
    tempi++, tempj++
  ) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (
    let tempi = i - 1, tempj = j + 1;
    tempi >= 0 && tempj < grid[0].length;
    tempi--, tempj++
  ) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (
    let tempi = i + 1, tempj = j - 1;
    tempi < grid.length && tempj >= 0;
    tempi++, tempj--
  ) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (
    let tempi = i - 1, tempj = j - 1;
    tempi >= 0 && tempj >= 0;
    tempi--, tempj--
  ) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (let tempi = i + 1, tempj = j; tempi < grid.length; tempi++) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (let tempi = i - 1, tempj = j; tempi >= 0; tempi--) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (let tempi = i, tempj = j + 1; tempj < grid[0].length; tempj++) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  for (let tempi = i, tempj = j - 1; tempj >= 0; tempj--) {
    if (grid[tempi][tempj] === "#") {
      count++;
      break;
    }
    if (grid[tempi][tempj] === "L") {
      break;
    }
  }
  return count;
}

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  let grid = data
    .split("\n")
    .map((row) => ["."].concat(row.split("")).concat(["."]));
  grid.push(".".repeat(grid[0].length).split(""));
  grid.unshift(".".repeat(grid[0].length).split(""));

  let changed = true;
  while (changed) {
    changed = false;
    let newGrid = [...grid.map((row) => [...row])];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === ".") continue;
        const adj = checkVisible(i, j, grid);
        //console.log(adj);
        if (grid[i][j] === "#" && adj >= 5) newGrid[i][j] = "L";
        else if (grid[i][j] === "L" && adj === 0) newGrid[i][j] = "#";
        if (newGrid[i][j] !== grid[i][j]) {
          changed = true;
        }
      }
    }
    grid = newGrid;
  }
  let count = 0;
  for (const line of grid) {
    count += line.filter((c) => c === "#").length;
    console.log(line.join(""));
  }
  console.log(count);
} catch (err) {
  console.error(err);
}
