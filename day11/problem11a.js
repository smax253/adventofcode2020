const fs = require("fs");

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
        const adj =
          (grid[i + 1][j] === "#") +
          (grid[i - 1][j] === "#") +
          (grid[i + 1][j + 1] === "#") +
          (grid[i + 1][j - 1] === "#") +
          (grid[i - 1][j + 1] === "#") +
          (grid[i - 1][j - 1] === "#") +
          (grid[i][j + 1] === "#") +
          (grid[i][j - 1] === "#");
        if (grid[i][j] === "#" && adj >= 4) newGrid[i][j] = "L";
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
