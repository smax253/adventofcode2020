const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
} catch (err) {
  console.error(err);
}
