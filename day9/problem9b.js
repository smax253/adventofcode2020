const fs = require("fs");
const { start } = require("repl");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const input = data.split("\n").map((number) => +number);
  const target = 258585477;
  let startIndex = 0,
    endIndex = 1;
  let sum = input[startIndex] + input[endIndex];
  while (sum !== target) {
    if (sum < target) {
      endIndex++;
      sum += input[endIndex];
    }
    if (sum > target) {
      sum -= input[startIndex];
      startIndex++;
    }
    console.log(sum);
  }
  const range = input.slice(startIndex, endIndex + 1);
  const min = Math.min(...range);
  const max = Math.max(...range);
  console.log(`Sum: ${min + max}`);
} catch (err) {
  console.error(err);
}
