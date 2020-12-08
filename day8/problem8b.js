const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const instructions = data.split("\n").map((instr) => instr.split(" "));
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i][0] === "acc") continue;
    let newInstructions = data.split("\n").map((instr) => instr.split(" "));
    newInstructions[i][0] = newInstructions[i][0] === "jmp" ? "nop" : "jmp";
    let global = 0;
    let counter = 0;
    let lines = newInstructions.map(() => 0);
    //console.log(newInstructions);
    while (lines[counter] === 0 && counter < newInstructions.length) {
      const line = newInstructions[counter];
      lines[counter] = 1;
      if (line[0] === "acc") {
        global += Number(line[1]);
        counter++;
      } else if (line[0] === "jmp") {
        counter += Number(line[1]);
      } else {
        counter++;
      }
      //console.log("exec line: ", counter);
    }
    if (counter === newInstructions.length) {
      console.log("ans: ", global);
      break;
    } else console.log("cont: ", i);
  }
} catch (err) {
  console.error(err);
}
