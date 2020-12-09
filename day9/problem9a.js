const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const input = data.split("\n").map((number) => +number);
  const values = {};
  const window = [];
  let index = 0;
  for (; index < 25; index++) {
    values[input[index]] = true;
    window.push(input[index]);
  }
  console.log(values, window);
  while (true) {
    const nextValue = input[index];
    let found = false;
    for (const num of window) {
      const target = nextValue - num;
      if (values[target]) {
        found = true;
        break;
      }
    }
    console.log(nextValue, found);
    if (!found) {
      console.log("ans: ", nextValue);
      break;
    }
    const removed = window.shift();
    window.push(nextValue);
    if (!window.includes(removed)) delete values[removed];
    values[nextValue] = true;
    index++;
  }
} catch (err) {
  console.error(err);
}
