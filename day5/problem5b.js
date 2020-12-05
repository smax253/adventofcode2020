const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const passes = data.split("\n");
  let maxId = 0;
  let minId = 1000;
  let comp = 0;
  for (const pass of passes) {
    const rowDirections = pass.slice(0, 7);
    const colDirections = pass.slice(7);
    console.log(rowDirections, colDirections);
    let rowBounds = [0, 127];
    for (const c of rowDirections) {
      const middle =
        Math.floor((rowBounds[1] - rowBounds[0]) / 2) + rowBounds[0];
      if (c === "F") rowBounds[1] = middle;
      else rowBounds[0] = middle + 1;
    }
    let colBounds = [0, 7];
    for (const c of colDirections) {
      const middle =
        Math.floor((colBounds[1] - colBounds[0]) / 2) + colBounds[0];
      if (c === "L") colBounds[1] = middle;
      else colBounds[0] = middle + 1;
    }
    const id = rowBounds[0] * 8 + colBounds[0];
    maxId = Math.max(id, maxId);
    minId = Math.min(id, minId);
    comp = comp ^ id;
  }
  for (let i = minId; i <= maxId; i++) {
    comp = comp ^ i;
  }
  console.log(comp);
} catch (err) {
  console.error(err);
}
