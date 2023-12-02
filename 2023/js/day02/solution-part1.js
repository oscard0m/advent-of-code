const fs = require("fs");
const path = require("path");

// const games = fs.readFileSync(
//   path.join(__dirname, "./input-dummy.txt"),
//   "utf8"
// );

const games = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");

const regex = /Game (\d+): /g;

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

let total = 0;

games.split("\n").forEach((game) => {
  const matcher = regex.exec(game);

  if (matcher) {
    const gameNumber = parseInt(matcher[1]);
    const gameSubsets = game.replace(regex, "");
    console.log(gameSubsets);
    let gameOver = false;

    gameSubsets.split(";").forEach((subset) => {
      const subsetParts = subset.split(",");

      if (!gameOver) {
        subsetParts.forEach((part) => {
          if (!gameOver) {
            if (part.match(/\d+ blue/)) {
              const numBlue = parseInt(part.replace(" blue", ""));
              if (numBlue > MAX_BLUE) {
                gameOver = true;
                console.log(`Game ${gameNumber} is over!: ${numBlue}`);
              }
            } else if (part.match(/\d+ green/)) {
              const numGreen = parseInt(part.replace(" green", ""));
              if (numGreen > MAX_GREEN) {
                gameOver = true;
                console.log(`Game ${gameNumber} is over!: ${numGreen}`);
              }
            } else if (part.match(/\d+ red/)) {
              const numRed = parseInt(part.replace(" red", ""));
              if (numRed > MAX_RED) {
                console.log(`Game ${gameNumber} is over!: ${numRed}`);
                gameOver = true;
              }
            }
          }
        });
      }
    });

    if (!gameOver) {
      console.log(`Game ${gameNumber} is possible!`);
      total += gameNumber;
    } else {
      console.log(`Game ${gameNumber} is over!`);
    }
  }
});

console.log(`Accumulator: ${total}`);
