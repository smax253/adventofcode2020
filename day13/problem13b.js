const fs = require("fs");

function LCM(a, b) {
  const orga = a,
    orgb = b;
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return orga * a * orgb * a;
}

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.trim().split("\n");
  const buses = lines[1].split(",").map((num) => +num);
  const offsets = buses
    .map((busTime, ind) => [busTime, ind])
    .filter(([num, _]) => !isNaN(num));
  let interval = offsets[0][0];
  let time = interval;
  for (let i = 1; i < offsets.length; i++) {
    const [busTime, offset] = offsets[i];
    while (busTime - ((time + offset) % busTime) !== busTime) time += interval;
    interval = LCM(interval, busTime);
  }
  console.log(time);
} catch (err) {
  console.error(err);
}
