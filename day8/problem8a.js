const { count } = require("console");
const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const instructions = data.split("\n").map((instr) => instr.split(" "));
  console.log(instructions);
  let global = 0;
  let counter = 0;
  let lines = instructions.map(() => 0);
  while (lines[counter] === 0) {
    const line = instructions[counter];
    lines[counter] = 1;
    if (line[0] === "acc") {
      global += Number(line[1]);
      counter++;
    } else if (line[0] === "jmp") {
      counter += Number(line[1]);
    } else {
      counter++;
    }
    console.log("exec line: ", counter);
  }
  console.log(global);
} catch (err) {
  console.error(err);
}
