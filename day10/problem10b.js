const fs = require("fs");

const memo = {};

function getWays(jolts, adapters) {
  if (jolts === 0) return 1;
  let result = 0;
  for (const diff of [1, 2, 3]) {
    if (jolts === diff || (jolts >= diff && adapters.includes(jolts - diff))) {
      const ways = memo[jolts - diff]
        ? memo[jolts - diff]
        : getWays(jolts - diff, adapters);
      result += ways;
    }
  }
  memo[jolts] = result;
  return result;
}

function getWaysSlow(jolts, adapters) {
  if (jolts === 0) return 1;
  let result = 0;
  for (const diff of [1, 2, 3]) {
    if (jolts === diff || (jolts >= diff && adapters.includes(jolts - diff))) {
      const ways = getWays(jolts - diff, adapters);
      result += ways;
    }
  }
  return result;
}

try {
  const data = fs.readFileSync("input.txt", "utf8").trim();
  const inputs = data
    .split("\n")
    .map((number) => +number)
    .sort((a, b) => a - b);

  const start = inputs[inputs.length - 1] + 3;
  const ways = getWaysSlow(start, inputs);
  //console.log(ways);
  console.log(ways);
} catch (err) {
  console.error(err);
}
