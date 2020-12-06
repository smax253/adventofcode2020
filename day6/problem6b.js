const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const groups = data.split("\n\n");
  const aCode = "a".charCodeAt(0);
  const final = groups
    .map((answers) => {
      let answerArr = Array(26).fill(0);
      let memberCount = 1;
      for (const c of answers) {
        if (c === "\n") memberCount++;
        else {
          const ans = c.charCodeAt(0) - aCode;
          answerArr[ans] += 1;
        }
      }
      console.log(answers);
      console.log(memberCount);
      console.log(answerArr);
      const result = answerArr.filter((count) => count === memberCount).length;
      console.log("result: " + result);
      return result;
    })
    .reduce((a, b) => a + b, 0);
  console.log(final);
} catch (err) {
  console.error(err);
}
