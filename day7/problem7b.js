const fs = require("fs");
function search(rules, bag) {
  const bags = rules[bag];
  if (isNaN(bags[0][0])) return 0;
  let sum = 0;
  bags.forEach((indvbag) => {
    sum += indvbag[0] * (1 + search(rules, indvbag[1]));
  });

  return sum;
}

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const rules = data.split("\n");
  const ruleObject = {};
  for (const rule of rules) {
    let target = rule.split("contain")[0];
    target = target.slice(0, target.indexOf("bag") - 1);
    let keys = rule.split("contain")[1];
    if (keys.includes(",")) {
      keys = keys.split(",").map((bag) => {
        return [+bag.slice(0, 2), bag.slice(3, bag.indexOf("bag") - 1)];
      });
    } else {
      keys = [[+keys.slice(0, 2), keys.slice(3, keys.indexOf("bag") - 1)]];
    }

    ruleObject[target] = keys;
  }

  console.log("ans: " + search(ruleObject, "shiny gold"));
} catch (err) {
  console.error(err);
}
