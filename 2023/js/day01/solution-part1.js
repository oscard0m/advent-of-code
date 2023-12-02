const fs = require("fs");
const path = require("path");

// const calibrationValues = fs.readFileSync(
//   path.join(__dirname, "./input-dummy.txt"),
//   "utf8"
// );

const calibrationValues = fs.readFileSync(
  path.join(__dirname, "./input.txt"),
  "utf8"
);

const regex = /\d/g;
let total = 0;

calibrationValues.split("\n").forEach((calibrationValue) => {
  const result = calibrationValue.match(regex);

  if (result) {
    total += parseInt(result[0] + result[result.length - 1]);
  }
});

console.log(`Accumulator: ${total}`);
