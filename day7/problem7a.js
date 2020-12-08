const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const rules = data.split("\n");
  const ruleObject = {};
  for (const rule of rules) {
    let target = rule.split("contain")[0];
    target = target.slice(0, target.indexOf("bag") - 1);
    const keys = rule
      .split("contain")[1]
      .split(",")
      .map((bag) => {
        return bag.slice(3, bag.indexOf("bag") - 1);
      });
    keys.forEach((color) => {
      if (!ruleObject[color]) ruleObject[color] = [target];
      else ruleObject[color].push(target);
    });
  }
  const ansSet = ["shiny gold"].concat(ruleObject["shiny gold"]);
  for (let i = 1; i < ansSet.length; i++) {
    ruleObject[ansSet[i]] &&
      ruleObject[ansSet[i]].forEach((color) => {
        if (!ansSet.includes(color)) ansSet.push(color);
      });
  }

  console.log("ans: " + (ansSet.length - 1));
} catch (err) {
  console.error(err);
}
