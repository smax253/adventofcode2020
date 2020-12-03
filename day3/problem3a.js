const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const rows = data.split("\n");
  const length = rows.length;
  const width = rows[0].length;
  console.log(length, width);
  let xpos = 0,
    ypos = 0;
  let count = 0;
  while (ypos < length) {
    if (rows[ypos][xpos] === "#") count++;
    xpos = (xpos + 3) % width;
    ypos++;
  }
  console.log(count);
} catch (err) {
  console.error(err);
}
