const fs = require("fs");

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const rows = data.split("\n");
  const length = rows.length;
  const width = rows[0].length;
  console.log(length, width);

  const trees = slopes.map(([xinc, yinc]) => {
    let xpos = 0,
      ypos = 0;
    let count = 0;
    while (ypos < length) {
      if (rows[ypos][xpos] === "#") count++;
      xpos = (xpos + xinc) % width;
      ypos += yinc;
    }
    return count;
  });
  console.log(trees);
  console.log(trees.reduce((x, y) => x * y, 1));
} catch (err) {
  console.error(err);
}
