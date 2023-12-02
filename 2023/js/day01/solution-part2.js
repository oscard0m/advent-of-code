const fs = require("fs");
const path = require("path");

// const calibrationValues = fs.readFileSync(
//   path.join(__dirname, "./input2-dummy.txt"),
//   "utf8"
// );

const calibrationValues = fs.readFileSync(
  path.join(__dirname, "./input2.txt"),
  "utf8"
);

const regex = /\d/g;
let total = 0;

calibrationValues.split("\n").forEach((calibrationValue) => {
  // 1. Sanitize the calibration value
  const sanitizedCalibrationValue = sanitizeCalibrationValue(calibrationValue);

  console.log(`Sanitized calibration value: ${sanitizedCalibrationValue}`);

  const result = sanitizedCalibrationValue.match(regex);

  if (result) {
    total += parseInt(result[0] + result[result.length - 1]);
  }
});

function sanitizeCalibrationValue(calibrationValue) {
  if (calibrationValue.startsWith("one")) {
    return 1 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("two")) {
    return 2 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("three")) {
    return 3 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("four")) {
    return 4 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("five")) {
    return 5 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("six")) {
    return 6 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("seven")) {
    return 7 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("eight")) {
    return 8 + sanitizeCalibrationValue(calibrationValue.slice(1));
  } else if (calibrationValue.startsWith("nine")) {
    return 9 + sanitizeCalibrationValue(calibrationValue.slice(1));
  }

  if (calibrationValue.length === 1) {
    return calibrationValue[0];
  } else {
    return (
      calibrationValue[0] + sanitizeCalibrationValue(calibrationValue.slice(1))
    );
  }
}

console.log(`Accumulator: ${total}`);
