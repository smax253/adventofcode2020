const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const directions = data.trim().split("\n");
  let direction = 0;
  let xval = 0,
    yval = 0;
  console.log(directions);
  for (const dir of directions) {
    const action = dir.slice(0, 1);
    const value = +dir.slice(1);
    if (action === "N") yval += value;
    else if (action === "E") xval += value;
    else if (action === "S") yval -= value;
    else if (action === "W") xval -= value;
    else if (action === "F") {
      xval += Math.cos(direction) * value;
      yval += Math.sin(direction) * value;
    } else if (action === "L")
      direction += ((value * Math.PI) / 180) % (2 * Math.PI);
    else if (action === "R")
      direction -= ((value * Math.PI) / 180) % (2 * Math.PI);
    else throw [dir, action];
    console.log(dir, [xval, yval]);
  }
  console.log(xval, yval, Math.abs(xval) + Math.abs(yval));
} catch (err) {
  console.error(err);
}
