import fs from "node:fs";

const input = fs.readFileSync("./input.txt", "utf8");

const firstList = [];
const secondList = [];

input.split("\n").forEach((line) => {
  const [element1, element2] = line.split(" ");
  firstList.push(element1);
  secondList.push(element2);
});

firstList.sort();
secondList.sort();

let accumDistance = 0;

for (let i = 0; i < firstList.length; i++) {
  accumDistance += Math.abs(firstList[i] - secondList[i]);
}

console.log(accumDistance);
