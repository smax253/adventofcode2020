const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const reqFields = {
    byr: (year) => 1920 <= +year && +year <= 2002,
    iyr: (year) => 2010 <= +year && +year <= 2020,
    eyr: (year) => 2020 <= +year && +year <= 2030,
    hgt: (height) => {
      const unit = height.slice(-2);
      const value = +height.slice(0, -2);
      if (unit === "cm") {
        return 150 <= value && value <= 193;
      } else return 59 <= value && value <= 76;
    },
    hcl: (color) => {
      if (color.charAt(0) !== "#") return false;
      const code = color.slice(1);
      if (code.length !== 6) return false;
      const validChars = "0123456789abcdef";
      for (const c of code) {
        if (!validChars.includes(c)) return false;
      }
      return true;
    },
    ecl: (color) => {
      const validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      return validColors.includes(color);
    },
    pid: (number) => {
      return number.length === 9 && !isNaN(Number(number));
    },
  };
  const parsedData = data
    .split("\n\n")
    .map((string) => string.replace(/\n/g, " "));
  const valid = parsedData.filter((creds) => {
    const fields = creds.split(" ").map((field) => field.split(":"));
    for (const reqField of Object.keys(reqFields)) {
      const index = fields.findIndex(([field, _]) => field === reqField);
      if (index < 0) return false;
      if (!reqFields[reqField](fields[index][1])) return false;
    }
    return true;
  });
  console.log(valid.length);
} catch (err) {
  console.error(err);
}
