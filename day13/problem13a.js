const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.trim().split("\n");
  const time = lines[0];
  const buses = lines[1]
    .split(",")
    .filter((bus) => bus !== "x")
    .map((num) => +num);
  const timesToNext = buses.map((busTime) => [
    busTime,
    busTime - (time % busTime),
  ]);
  const minTime = timesToNext.reduce(
    (a, b) => (a[1] < b[1] ? a : b),
    timesToNext[0]
  );
  console.log(minTime[0] * minTime[1]);
} catch (err) {
  console.error(err);
}
