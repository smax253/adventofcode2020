const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const inputs = data
    .split("\n")
    .map((number) => +number)
    .sort((a, b) => a - b);
  let onediff = 1;
  let threediff = 1;
  for (let i = 0; i < inputs.length - 1; i++) {
    const diff = inputs[i + 1] - inputs[i];
    console.log(inputs[i + 1], inputs[i], diff);
    if (diff === 1) onediff++;
    else if (diff === 3) threediff++;
  }
  console.log(threediff * onediff);
} catch (err) {
  console.error(err);
}
