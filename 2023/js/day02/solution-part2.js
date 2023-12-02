const fs = require("fs");
const path = require("path");

// const games = fs.readFileSync(
//   path.join(__dirname, "./input2-dummy.txt"),
//   "utf8"
// );

const games = fs.readFileSync(path.join(__dirname, "./input2.txt"), "utf8");

const regex = /Game (\d+): /g;

let totalPower = 0;

games.split("\n").forEach((game) => {
  const matcher = regex.exec(game);

  if (matcher) {
    const gameNumber = parseInt(matcher[1]);
    const gameSubsets = game.replace(regex, "");
    console.log(gameSubsets);

    let minBlue = 0;
    let minGreen = 0;
    let minRed = 0;

    gameSubsets.split(";").forEach((subset) => {
      const subsetParts = subset.split(",");

      subsetParts.forEach((part) => {
        if (part.match(/\d+ blue/)) {
          const numBlue = parseInt(part.replace(" blue", ""));
          if (numBlue > minBlue) {
            minBlue = numBlue;
            console.log(`Update minBlue: ${numBlue}`);
          }
        } else if (part.match(/\d+ green/)) {
          const numGreen = parseInt(part.replace(" green", ""));
          if (numGreen > minGreen) {
            minGreen = numGreen;
            console.log(`Update minGreen: ${numGreen}`);
          }
        } else if (part.match(/\d+ red/)) {
          const numRed = parseInt(part.replace(" red", ""));
          if (numRed > minRed) {
            minRed = numRed;
            console.log(`Update minRed: ${numRed}`);
          }
        }
      });
    });

    const power = minBlue * minGreen * minRed;
    console.log(`Game ${gameNumber} power: ${power}`);
    totalPower += power;
  }
});

console.log(`Accumulator: ${totalPower}`);
