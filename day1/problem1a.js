const fs = require("fs");

try {
  const data = fs.readFileSync("./input.txt", "utf8");
  const numbers = data
    .split("\n")
    .map((number) => +number)
    .filter((number) => number !== 0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        console.log(numbers[i] * numbers[j]);
        return;
      }
    }
  }
} catch (err) {
  console.error(err);
}
