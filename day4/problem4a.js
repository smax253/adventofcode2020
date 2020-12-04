const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const reqFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  const parsedData = data
    .split("\n\n")
    .map((string) => string.replace(/\n/g, " "));
  const valid = parsedData.filter((creds) => {
    const fields = creds.split(" ").map((field) => field.split(":")[0]);
    for (const reqField of reqFields) {
      if (!fields.includes(reqField)) return false;
    }
    return true;
  });
  console.log(valid.length);
} catch (err) {
  console.error(err);
}
