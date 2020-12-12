const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const directions = data.trim().split("\n");
  let waypoint = [10, 1];
  let xval = 0,
    yval = 0;
  console.log(directions);
  for (const dir of directions) {
    const action = dir.slice(0, 1);
    const value = +dir.slice(1);
    if (action === "N") waypoint[1] += value;
    else if (action === "E") waypoint[0] += value;
    else if (action === "S") waypoint[1] -= value;
    else if (action === "W") waypoint[0] -= value;
    else if (action === "F") {
      xval += waypoint[0] * value;
      yval += waypoint[1] * value;
    } else if (action === "L") {
      if (value === 90) waypoint = [-waypoint[1], waypoint[0]];
      else if (value === 180) waypoint = [-waypoint[0], -waypoint[1]];
      else waypoint = [waypoint[1], -waypoint[0]];
    } else if (action === "R") {
      if (value === 270) waypoint = [-waypoint[1], waypoint[0]];
      else if (value === 180) waypoint = [-waypoint[0], -waypoint[1]];
      else waypoint = [waypoint[1], -waypoint[0]];
    } else throw [dir, action];
    waypoint = waypoint.map((number) => Math.round(number));
    console.log(dir, [xval, yval]);
  }
  console.log(xval, yval, Math.abs(xval) + Math.abs(yval));
} catch (err) {
  console.error(err);
}
