const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const groups = data.split("\n\n").map((str) => str.replace(/\n/g, ""));
  const aCode = "a".charCodeAt(0);
  const final = groups
    .map((answers) => {
      let answerArr = Array(26).fill(0);

      for (const c of answers) {
        const ans = c.charCodeAt(0) - aCode;
        answerArr[ans] = 1;
      }
      return answerArr.reduce((a, b) => a + b, 0);
    })
    .reduce((a, b) => a + b, 0);
  console.log(final);
} catch (err) {
  console.error(err);
}
