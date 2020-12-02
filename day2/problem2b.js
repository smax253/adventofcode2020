const fs = require("fs");

try {
  const data = fs.readFileSync("./input.txt", "utf8");
  const lines = data.split("\n");
  let total = 0;
  for (const line of lines) {
    const parts = line.split(":");
    const password = parts[1].trim();
    const char = parts[0].slice(-1);
    const range = parts[0]
      .slice(0, -1)
      .split("-")
      .map((number) => {
        return +number;
      });
    const count =
      (password[range[0] - 1] === char) + (password[range[1] - 1] === char);
    if (count === 1) {
      total += 1;
      console.log(line);
    }
  }
  console.log(total);
} catch (err) {
  console.error(err);
}
